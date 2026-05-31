import { Component, Input} from '@angular/core';
import { Blog } from '../../Models/Blog';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() BlogData: Blog = {Id:0, ImageUrl:"", Title: "", Description: "", Category: ""};

  goToDetails()
  {
    
  }
}