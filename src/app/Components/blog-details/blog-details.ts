import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../Services/blog.service';
import { Blog } from '../../Core/Models/Blog/Blog';
import { environment } from '../../../environments/environment.development';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css'
})
export class BlogDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

  blog!: Blog;
  isLoading = true;
  errorMessage = '';
  domainUrl = environment.baseUrl;

  async ngOnInit(): Promise<void> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) 
    {
      await this.loadBlogDetails(id);
    } 
    else 
    {
      this.errorMessage = 'Invalid blog ID';
      this.isLoading = false;
    }
  }

  async loadBlogDetails(id: number): Promise<void> {
    try 
    {
      this.isLoading = true;
      const response = await fetch(`${this.domainUrl}/api/blogs/${id}`);
      if (!response.ok) 
      {
        throw new Error('Blog not found');
      }
      this.blog = await response.json() as Blog;
    } 
    catch (error: any) 
    {
      this.errorMessage = 'Could not load article details. Please try again.';
      console.error(error);
    } 
    finally 
    {
      this.isLoading = false;
    }
  }
}