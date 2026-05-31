import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blog } from '../../Models/Blog';
import { IValidationResponse } from '../../Models/IValidationResponse';
import { Category } from '../../Models/Category';

@Component({
  selector: 'app-create-blog',
  imports: [FormsModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css',
})
export class CreateBlog implements OnInit {
  Id:number = 0;
  Title: string = "";
  Description: string = "";
  imagePreview: string | null = null;
  selectedCategory: string = "";
  firstClick: Boolean = false;

  selectedImage: File | null = null;
  selectedFileName: string = '';
  imageError: string = '';

  categories: Category[] = [{Id: 1, Name: "AI"}, 
                            {Id: 2, Name: "Mobile Development"},
                            {Id: 3, Name: "Programming"},
                            {Id: 4, Name: "Web Development"}
                           ];
   
  @Output() CreateBlogEvent = new EventEmitter();

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

    if(this.firstClick && (this.Title.length < 3 || this.Title.length > 50))
      response.Message = "Title must be between 3 and 50 only.";
    else 
      response.Success = true;

    return response
  }

  get DescriptionValid() :  IValidationResponse
  {
    let response: IValidationResponse = {Success: false, Message: ""};

    if(this.firstClick && (this.Description.length < 30 || this.Description.length > 1000))
      response.Message = "Description must be between 30 and 1000 only.";
    else 
      response.Success = true;

    return response
  }

  get categoryValid(): IValidationResponse 
  {
    let response: IValidationResponse = {Success: false, Message: ""};
    if (this.firstClick && !this.selectedCategory)
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

  createBlog()
  {
    this.firstClick = true;

    if(this.IsBlogValid)
    {
      let BlogData: Blog = {Id:this.Id, 
                            ImageUrl:this.imagePreview, 
                            Title: this.Title, 
                            Description: this.Description,
                            Category: this.selectedCategory};
      
      this.CreateBlogEvent.emit(BlogData);

      this.Title = "";
      this.Description = "";
      this.selectedCategory = "";
      this.imagePreview = null;
      this.firstClick = false;
    }
  }
}