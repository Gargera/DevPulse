import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-dashboard-layout.component',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {

}
