import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) 
  {
    router.navigate(['/auth/login']);
    return false;
  }

  if (state.url.includes('/admin')) 
  {
    if (authService.isAdmin()) 
    {
      return true;
    } 
    else 
    {
      router.navigate(['/home']);
      return false;
    }
  }

  return true;
};