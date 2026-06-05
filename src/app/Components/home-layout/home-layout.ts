import { Component } from '@angular/core';
import { CreateBlog } from "../create-blog/create-blog";
import { LatestBlogs } from "../latest-blogs/latest-blogs";
import { Blog } from '../../Core/Models/Blog/Blog';

@Component({
  selector: 'app-home-layout',
  imports: [CreateBlog, LatestBlogs],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css',
})
export class HomeLayout {
   BlogData: Blog = {Id: 0, ImageUrl: null, Title: "", Content: "", CategoryName: ""};

   CreateBlogEventHandler(Blog: Blog)
   {
      this.BlogData = Blog;
   }
}