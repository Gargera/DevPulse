import { Component, signal } from '@angular/core';
import { Nav } from "../Components/nav/nav";
import { Footer } from "../Components/footer/footer";
import { HomeLayout } from "../Components/home-layout/home-layout";

@Component({
  selector: 'app-root',
  imports: [Nav, Footer, HomeLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DevPulse');
}