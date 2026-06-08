import { Component, inject, Input} from '@angular/core';
import { Blog } from '../../Core/Models/Blog/Blog';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryColorDirective } from '../../Core/directives/category-color';

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule, CategoryColorDirective],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {
  private router = inject(Router)

  @Input() BlogData: Blog = {id:0, imageUrl:"", title: "", content: "", categoryName: "", userName: "", createdAt: new Date()};

  goToDetails()
  {
    this.router.navigate(['/blogs', this.BlogData.id]);
  }
}