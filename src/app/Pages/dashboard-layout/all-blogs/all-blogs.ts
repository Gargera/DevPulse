import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blog } from '../../../Core/Models/Blog/Blog';
import { BlogService } from '../../../Services/blog.service';

@Component({
  selector: 'app-all-blogs',
  imports: [FormsModule],
  templateUrl: './all-blogs.html',
  styleUrl: './all-blogs.css',
})
export class AllBlogs implements OnInit {
  private blogService = inject(BlogService);

  blogs: Blog[] = [];
  filteredBlogs: Blog[] = [];
  
  searchQuery: string = '';
  isLoading: boolean = true;

  ngOnInit(): void {
    this.loadAllBlogs();
  }

  loadAllBlogs(): void {
    this.isLoading = true;
    this.blogService.getBlogs().subscribe({
      next: (data: Blog[]) => {
        this.blogs = data;
        this.filteredBlogs = data; 
        this.isLoading = false;
      },
      error: (err: any) => {
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase().trim();
    
    if (!query) {
      this.filteredBlogs = this.blogs;
      return;
    }

    this.filteredBlogs = this.blogs.filter(blog => 
      blog.Title.toLowerCase().includes(query) || 
      blog.CategoryName.toLowerCase().includes(query)
    );
  }

  deleteBlog(id: number): void 
  {
    if (confirm('Are you sure you want to delete this blog permanently?')) {
      this.isLoading = true;
      this.blogService.deleteBlog(id).subscribe({
        next: () => {
          alert('Blog deleted successfully');
          this.blogs = this.blogs.filter(b => b.Id !== id);
          this.filteredBlogs = this.filteredBlogs.filter(b => b.Id !== id);
          this.isLoading = false;
        },
        error: (err : any) => {
          this.isLoading = false;
        }
      });
    }
  }

  editBlog(id: number) : void
  {

  }
}
