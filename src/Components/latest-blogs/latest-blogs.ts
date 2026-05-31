import { Component, Input } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { Blog } from '../../Models/Blog';

@Component({
  selector: 'app-latest-blogs',
  imports: [BlogCard],
  templateUrl: './latest-blogs.html',
  styleUrl: './latest-blogs.css',
})
export class LatestBlogs {
    @Input() Blogs: Blog[] = [];
}