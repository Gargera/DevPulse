import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (state.url.includes('/admin')) 
  {
    if (authService.isAdmin()) 
    {
      return true;
    } 
    else 
    {
      router.navigate(['/403']);
      return false;
    }
  }

  return true;
};
