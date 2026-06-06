import { Component, Input} from '@angular/core';
import { Blog } from '../../Core/Models/Blog/Blog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  @Input() BlogData: Blog = {Id:0, ImageUrl:"", Title: "", Content: "", CategoryName: "", UserName: "", CreatedAt: new Date()};

  constructor(private router: Router)
  {

  }

  goToDetails()
  {
    this.router.navigate(['/blogs', this.BlogData.Id]);
  }
}