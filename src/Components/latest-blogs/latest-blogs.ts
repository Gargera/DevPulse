import { Component, Input } from '@angular/core';
import { BlogCard } from '../blog-card/blog-card';
import { IBlogData } from '../../Models/IBlogData';

@Component({
  selector: 'app-latest-blogs',
  imports: [BlogCard],
  templateUrl: './latest-blogs.html',
  styleUrl: './latest-blogs.css',
})
export class LatestBlogs {
    @Input() Blogs: IBlogData[] = [];
}