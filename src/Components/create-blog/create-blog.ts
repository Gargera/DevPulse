import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../../Models/Blog';
import { IValidationResponse } from '../../Models/IValidationResponse';
import { Category } from '../../Models/Category';

@Component({
  selector: 'app-create-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css',
})
export class CreateBlog implements OnInit {
  Id: number = 0;
  imagePreview: string | null = null;
  selectedImage: File | null = null;
  selectedFileName: string = '';
  imageError: string = '';

  blogForm: FormGroup;

  categories: Category[] = [
                              { Id: 1, Name: "AI" },
                              { Id: 2, Name: "Mobile Development" },
                              { Id: 3, Name: "Programming" },
                              { Id: 4, Name: "Web Development" }
                            ];

  @Output() CreateBlogEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      Title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      Description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
      Category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //this.categories = call api
  }

  onImageSelected(event: Event)
  {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file = input.files[0];
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp'
    ];

    if (!allowedTypes.includes(file.type))
    {
      this.imageError = 'Only JPG, PNG and WEBP are allowed';

      this.selectedImage = null;
      this.imagePreview = null;

      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize)
    {
      this.imageError = 'Image size must be less than 5 MB';

      this.selectedImage = null;
      this.imagePreview = null;

      return;
    }

    this.imageError = '';
    this.selectedImage = file;
    this.selectedFileName = file.name;
    const reader = new FileReader();

    reader.onload = () =>
    {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  get TitleValid() : IValidationResponse
  {
    let response:  IValidationResponse = {Success: false, Message: ""};
    let title = this.blogForm.get('Title');

    if(!title?.touched) return response;

    if(title.errors?.['required']) 
      response.Message = "Title is required.";
    else if(title.errors?.['minlength'])
      response.Message = "Title must be at least 3 characters.";
    else if(title.errors?.['maxlength'])
      response.Message = "Title can't be more than 50 characters.";
    else 
      response.Success = true;

    return response
  }

  get DescriptionValid() :  IValidationResponse
  {
    let response: IValidationResponse = {Success: false, Message: ""};
    let description = this.blogForm.get('Description');

    if(!description?.touched) return response;

    if(description.errors?.['required']) 
      response.Message = "Description is required.";
    else if(description.errors?.['minlength'])
      response.Message = "Description must be at least 50 characters.";
    else if(description.errors?.['maxlength'])
      response.Message = "Description can't be more than 1000 characters.";
    else 
      response.Success = true;

    return response
  }

  get categoryValid(): IValidationResponse 
  {
    let response: IValidationResponse = {Success: false, Message: ""};
    let category = this.blogForm.get('Category');

    if(!category?.touched) return response;

    if (category?.errors?.['required'])
      response.Message = 'Please select a category';
    else
      response.Success = true;

    return response;
}

  get IsBlogValid(){
     if(this.TitleValid.Success && 
        this.DescriptionValid.Success && 
        this.categoryValid.Success) return true;
     else return false;
  }

  createBlog() {
    this.blogForm.markAllAsTouched();

    if (this.blogForm.valid) {
      const BlogData: Blog = {
                                Id: this.Id,
                                ImageUrl: this.imagePreview,
                                Title: this.blogForm.value.Title,
                                Description: this.blogForm.value.Description,
                                Category: this.blogForm.value.Category
                              };

      this.CreateBlogEvent.emit(BlogData);

      this.blogForm.reset();
      this.imagePreview = null;
      this.selectedFileName = '';
    }
  }
}