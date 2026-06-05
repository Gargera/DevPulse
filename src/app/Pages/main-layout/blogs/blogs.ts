import { Component } from '@angular/core';
import { Blog } from '../../../Core/Models/Blog/Blog';
import { FormsModule } from '@angular/forms';
import { BlogCard } from '../../../Components/blog-card/blog-card';
import { Category } from '../../../Core/Models/Category/Category';

@Component({
  selector: 'app-blogs',
  imports: [FormsModule, BlogCard],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {
  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  categories: Category[] = [];
  selectedCategory: number | null = null;
  searchQuery = '';
  isLoading = false;

  onSearch() 
  {
    this.filteredBlogs = this.blogs.filter(b =>
      b.Title.toLowerCase().includes(this.searchQuery.toLowerCase())
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
