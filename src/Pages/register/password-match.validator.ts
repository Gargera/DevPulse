import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn 
{
  return (form: AbstractControl): ValidationErrors | null => 
    {
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        if (!password || !confirmPassword) {
        return null;
        }

        return password.value === confirmPassword.value ? null : { passwordMismatch: true };
   };
}