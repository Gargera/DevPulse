import { Component } from '@angular/core';
import { Nav } from '../../../Components/nav/nav';
import { Footer } from '../../../Components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout-component',
  imports: [Nav, Footer, RouterOutlet],
  templateUrl: './main-layout-component.html',
  styleUrl: './main-layout-component.css',
})
export class MainLayoutComponent {

}
