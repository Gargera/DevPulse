import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBlogData } from '../../Models/IBlogData';
import { IValidationResponse } from '../../Models/IValidationResponse';

@Component({
  selector: 'app-create-blog',
  imports: [FormsModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css',
})
export class CreateBlog {
  Id:number = 0;
  ImageUrl:string = "";
  Title: string = "";
  Description: string = "";
  firstClick: Boolean = false;
   
  @Output() CreateBlogEvent = new EventEmitter();

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

  get IsBlogValid(){
     if(this.TitleValid.Success && this.DescriptionValid.Success) return true;
     else return false;
  }

  createBlog()
  {
    this.firstClick = true;

    if(this.IsBlogValid)
    {
      let BlogData: IBlogData = {Id:this.Id, ImageUrl:this.ImageUrl, Title: this.Title, Description: this.Description};
      
      this.CreateBlogEvent.emit(BlogData);

      this.Title = "";
      this.Description = "";
      this.firstClick = false;
    }
  }
}