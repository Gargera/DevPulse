import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { Blog } from '../../Models/Blog/Blog';

@Component({
  selector: 'app-latest-blogs',
  imports: [BlogCard],
  templateUrl: './latest-blogs.html',
  styleUrl: './latest-blogs.css',
})
export class LatestBlogs implements OnChanges, OnInit{
  Blogs: Blog[] = [];
  @Input() parentBlogData: Blog = {Id: 0, ImageUrl: null, Title: "", Content: "", CategoryName: ""};

  ngOnInit(): void {
    //this.Blogs = call api 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes["parentBlogData"].firstChange) 
       this.Blogs.push(this.parentBlogData);
  }
}