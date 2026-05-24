import { Component, Input} from '@angular/core';
import { IBlogData } from '../../Models/IBlogData';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() BlogData: IBlogData = {Id:0, ImageUrl:"", Title: "", Description: ""};
}