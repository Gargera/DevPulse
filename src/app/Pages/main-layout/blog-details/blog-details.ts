import { Component, OnInit, inject } from '@angular/core';
import { Blog } from '../../../Core/Models/Blog/Blog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails implements OnInit {
  private location = inject(Location);
  private route = inject(ActivatedRoute);

  blog: Blog | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // call API: getBlogById(id) , this.blog = result
  }

  goBack() 
  { 
    this.location.back();
  }
}