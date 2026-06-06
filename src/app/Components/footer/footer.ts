import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit{
  private authService = Inject(AuthService);

  isUserLoggedIn: boolean = false;
  isUserAdmin: boolean = false;

  ngOnInit(): void 
  {
    this.isUserLoggedIn = this.authService.isLoggedIn();
    this.isUserAdmin = this.authService.isAdmin();
  }
}
