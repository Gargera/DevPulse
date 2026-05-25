import { Component, signal } from '@angular/core';
import { Nav } from "../Components/nav/nav";
import { Footer } from "../Components/footer/footer";
import { HomeLayout } from "../Components/home-layout/home-layout";
import { Register } from "../TestComponents/register/register";
import { Login } from "../TestComponents/login/login";

@Component({
  selector: 'app-root',
  imports: [Nav, Footer, HomeLayout, Register, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DevPulse');

  arr: {Name: string, Email: string}[] = [];
  
  RegisterEventHandler(obj: any)
  {
     this.arr.push(obj);
  }
}