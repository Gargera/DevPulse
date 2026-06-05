import { Component, Input} from '@angular/core';
import { Blog } from '../../Models/Blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() BlogData: Blog = {Id:0, ImageUrl:"", Title: "", Content: "", CategoryName: ""};

  constructor(private router: Router)
  {

  }

  goToDetails()
  {
    this.router.navigate(['/blogs', this.BlogData.Id]);
  }
}