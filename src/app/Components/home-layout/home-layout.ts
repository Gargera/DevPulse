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
   BlogData: Blog = {id:0, imageUrl:"", title: "", content: "", categoryName: "", userName: "", createdAt: new Date()};

   CreateBlogEventHandler(Blog: Blog)
   {
      this.BlogData = Blog;
   }
}