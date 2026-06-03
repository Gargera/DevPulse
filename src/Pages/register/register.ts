import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserRegister } from '../../Models/UserRegister';
import { passwordMatchValidator } from './password-match.validator';
import { IValidationResponse } from '../../Models/IValidationResponse';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;
  passwordStrength = 0;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required, Validators.minLength(2), Validators.maxLength(100)],
      lastName: ['', Validators.required, Validators.minLength(2), Validators.maxLength(100)],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      confirmPassword: ['', Validators.required]
    },
      {
        validators: passwordMatchValidator()
      });
  }

  updateStrength(event: Event): void 
  {
    const val = (event.target as HTMLInputElement).value;
    let score = 0;
    if (val.length >= 8)          score++;
    if (/[A-Z]/.test(val))        score++;
    if (/[0-9]/.test(val))        score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    this.passwordStrength = score;
  }

  getSegClass(seg: number): string 
  {
    if (this.passwordStrength === 0) return '';
    if (seg > this.passwordStrength) return '';
    if (this.passwordStrength === 1) return 'weak';
    if (this.passwordStrength === 2 || this.passwordStrength === 3) return 'fair';
    return 'strong';
  }

  togglePassword(field: 'password' | 'confirmPassword'): void 
  {
    if (field === 'password')
      this.showPassword = !this.showPassword;
    else
      this.showConfirmPassword = !this.showConfirmPassword;
  }

  get firstNameValid(): IValidationResponse 
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let firstNameControl = this.registerForm.get('firstName');

    if (!firstNameControl?.touched) return response;

    if (firstNameControl?.errors?.['required'])
      response.Message = "First name is required";
    else if (firstNameControl?.errors?.['minlength'])
      response.Message = `First name must be at least ${firstNameControl.errors?.['minlength']?.requiredLength} characters`;
    else if (firstNameControl?.errors?.['maxlength'])
      response.Message = `First name cannot exceed ${firstNameControl.errors?.['maxlength']?.requiredLength} characters`;
    else
      response.Success = true;

    return response;
  }

  get lastNameValid(): IValidationResponse 
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let lastNameControl = this.registerForm.get('lastName');

    if (!lastNameControl?.touched) return response;

    if (lastNameControl?.errors?.['required'])
      response.Message = "Last name is required";
    else if (lastNameControl?.errors?.['minlength'])
      response.Message = `Last name must be at least ${lastNameControl.errors?.['minlength']?.requiredLength} characters`;
    else if (lastNameControl?.errors?.['maxlength'])
      response.Message = `Last name cannot exceed ${lastNameControl.errors?.['maxlength']?.requiredLength} characters`;
    else
      response.Success = true;

    return response;
  }

  get emailValid(): IValidationResponse 
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let emailControl = this.registerForm.get('email');

    if (!emailControl?.touched) return response;

    if (emailControl?.errors?.['required'])
      response.Message = "Email is required";
    else if (emailControl?.errors?.['email'])
      response.Message = "Please enter a valid email address";
    else
      response.Success = true;

    return response;
  }

  get usernameValid(): IValidationResponse
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let usernameControl = this.registerForm.get('username');

    if (!usernameControl?.touched) return response;

    if (usernameControl?.errors?.['required'])
      response.Message = "Username is required";
    else if (usernameControl?.errors?.['pattern'])
      response.Message = "Username can only contain letters and numbers";
    else
      response.Success = true;

    return response;
  }

  get passwordValid(): IValidationResponse
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let passwordControl = this.registerForm.get('password');

    if (!passwordControl?.touched) return response;

    if (passwordControl?.errors?.['required'])
      response.Message = "Password is required";
    else if (passwordControl?.errors?.['minlength'])
      response.Message = `Password must be at least ${passwordControl.errors?.['minlength']?.requiredLength} characters`;
    else if (passwordControl?.errors?.['pattern'])
      response.Message = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    else
      response.Success = true;

    return response;
  }

  get confirmPasswordValid(): IValidationResponse
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let confirmPasswordControl = this.registerForm.get('confirmPassword');

    if (!confirmPasswordControl?.touched) return response;

    if (confirmPasswordControl?.errors?.['required'])
      response.Message = "Please confirm your password";
    else if (this.registerForm.errors?.['passwordsMismatch'])
      response.Message = "Passwords do not match";
    else
      response.Success = true;

    return response;
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.valid) {
      const userRegister: UserRegister = {
        FirstName: this.registerForm.value.firstName,
        LastName: this.registerForm.value.lastName,
        Email: this.registerForm.value.email,
        UserName: this.registerForm.value.username,
        Password: this.registerForm.value.password
      };
      // Call API to register user
      this.router.navigate(['/auth/login']);
      this.registerForm.reset();
    }
  }
}