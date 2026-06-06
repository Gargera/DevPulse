import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  private authService = Inject(AuthService);
  private router = Inject(Router);

  isUserLoggedIn: boolean = false;
  isUserAdmin: boolean = false;

  ngOnInit(): void 
  {
    this.isUserLoggedIn = this.authService.isLoggedIn();
    this.isUserAdmin = this.authService.isAdmin();
  }

  onLogout(): void 
  {
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.isUserAdmin = false;
    this.router.navigate(['/home']);
  }
}
