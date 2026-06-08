import { Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { Blog } from '../../Core/Models/Blog/Blog';
import { BlogService } from '../../Services/blog.service';

@Component({
  selector: 'app-latest-blogs',
  imports: [BlogCard],
  templateUrl: './latest-blogs.html',
  styleUrl: './latest-blogs.css',
})
export class LatestBlogs implements OnChanges, OnInit{
  private blogService = inject(BlogService);

  Blogs: Blog[] = [];
  @Input() parentBlogData: Blog = {id:0, imageUrl:"", title: "", content: "", categoryName: "", userName: "", createdAt: new Date()};

  ngOnInit(): void {
    //this.Blogs = call api 
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    if(!changes["parentBlogData"].firstChange) 
       this.Blogs.push(this.parentBlogData);
  }
}