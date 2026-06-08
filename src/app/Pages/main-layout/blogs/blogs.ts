import { Component, inject, OnInit } from '@angular/core';
import { Blog } from '../../../Core/Models/Blog/Blog';
import { FormsModule } from '@angular/forms';
import { BlogCard } from '../../../Components/blog-card/blog-card';
import { Category } from '../../../Core/Models/Category/Category';
import { BlogService } from '../../../Services/blog.service';

@Component({
  selector: 'app-blogs',
  imports: [FormsModule, BlogCard],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs implements OnInit{
  private blogService = inject(BlogService);

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories: Category[] = [];
  selectedCategory: number | null = null;
  searchQuery = '';
  isLoading = false;

  async ngOnInit(): Promise<void> {
    await this.loadAllBlogs();
  }

  async loadAllBlogs(): Promise<void> {
    try {
      this.isLoading = true;
      this.blogs = await this.blogService.getBlogs();
      this.filteredBlogs = this.blogs;
      console.log(this.blogs);
    } catch (error: any) {
      console.error('Fetch error:', error);
    } finally {
      this.isLoading = false;
    }
  }

  onSearch() 
  {
    this.filteredBlogs = this.blogs.filter(b =>
      b.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onCategoryChange() 
  {
    if (this.selectedCategory) 
    {
      // call API: getByCategory(this.selectedCategory)
      // this.filteredBlogs = result
    } 
    else 
    {
      this.filteredBlogs = [...this.blogs];
    }
  }

  clearSearch() 
  { 
    this.searchQuery = ''; 
    this.onSearch(); 
  }

  resetFilters() 
  { 
    this.searchQuery = ''; 
    this.selectedCategory = null; 
    this.filteredBlogs = [...this.blogs]; 
  }
}
