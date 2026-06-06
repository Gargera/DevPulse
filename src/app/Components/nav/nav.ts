import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit{
  private authService = inject(AuthService);
  private router = inject(Router);

  isUserLoggedIn: boolean = true;
  isUserAdmin: boolean = true;

  ngOnInit(): void 
  {
    this.isUserLoggedIn = this.authService.isLoggedIn();
    this.isUserAdmin = this.authService.isAdmin();
  }

  onLogout(): void 
  {
    this.authService.logOut();
    this.isUserLoggedIn = false;
    this.isUserAdmin = false;
    this.router.navigate(['/home']);
  }
}
