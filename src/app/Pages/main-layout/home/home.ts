import { Component } from '@angular/core';
import { HomeLayout } from "../../../Components/home-layout/home-layout";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HomeLayout, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   
}