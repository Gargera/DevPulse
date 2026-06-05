import { Component } from '@angular/core';
import { Nav } from '../../app/Components/nav/nav';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../app/Components/footer/footer";

@Component({
  selector: 'app-main-layout',
  imports: [Nav, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
