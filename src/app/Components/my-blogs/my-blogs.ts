import { CommonModule } from '@angular/common';
import { Component, Inject , OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BlogCard } from '../blog-card/blog-card';
import { Blog } from '../../Core/Models/Blog/Blog';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-my-blogs',
  imports: [CommonModule, RouterModule, BlogCard],
  templateUrl: './my-blogs.html',
  styleUrl: './my-blogs.css',
})
export class MyBlogs implements OnInit{
  private blogService = Inject(BlogService);
  private router = Inject(Router);

  myBlogs: Blog[] = [];
  isLoading: boolean = true;
  isDashboardMode: boolean = false;

  ngOnInit(): void 
  {
    this.isDashboardMode = this.router.url.includes('admin');
    
    //myBlogs = call api
  }

  deleteBlog(id: number, event: Event): void 
  {
    event.stopPropagation();
  }
}
