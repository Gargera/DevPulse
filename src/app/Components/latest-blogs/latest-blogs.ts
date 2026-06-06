import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  private blogService = Inject(BlogService);

  Blogs: Blog[] = [];
  @Input() parentBlogData: Blog = {Id: 0, ImageUrl: null, Title: "", Content: "", CategoryName: "", CreatedAt: new Date(), UserName: ""};

  ngOnInit(): void {
    //this.Blogs = call api 
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    if(!changes["parentBlogData"].firstChange) 
       this.Blogs.push(this.parentBlogData);
  }
}