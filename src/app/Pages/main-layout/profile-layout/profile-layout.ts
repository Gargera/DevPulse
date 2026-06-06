import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-profile-layout',
  imports: [FormsModule, RouterModule, RouterOutlet],
  templateUrl: './profile-layout.html',
  styleUrl: './profile-layout.css',
})
export class ProfileLayout {
  activeTab: string = 'blogs';
  isSaving: boolean = false;

  username: string = 'EsraaTaha';
  firstName: string = 'Esraa';
  lastName: string = 'Taha';
  fullName: string = this.firstName + ' ' + this.lastName;
  email: string = 'user@devpulse.com';
  roleName: string[] = ['User'];

  private authService = Inject(AuthService);

  switchTab(tabName: string): void 
  {
    this.activeTab = tabName;
  }

  onUpdateProfile()
  {

  }
}
