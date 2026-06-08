import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  private route = inject(ActivatedRoute);

  statusCode: string = '404';
  title: string = 'Oops! Page Not Found';
  subtitle: string = 'Looks like this page took a coffee break and forgot to come back.';
  isForbidden: boolean = false;

  ngOnInit(): void {
    const currentUrl = this.route.snapshot.url.toString();
    if (currentUrl.includes('403')) {
      this.statusCode = '403';
      this.title = 'Access Denied!';
      this.subtitle = 'You do not have the Administrator privileges required to access this page.';
      this.isForbidden = true;
    }
  }
}
