import { Component, OnInit } from '@angular/core';
import { Blog } from '../../app/Models/Blog/Blog';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails implements OnInit {
  blog: Blog | null = null;

  constructor(private location: Location, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // call API: getBlogById(id) , this.blog = result
  }

  goBack() 
  { 
    this.location.back();
  }
}