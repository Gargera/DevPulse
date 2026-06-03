import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IValidationResponse } from '../../Models/IValidationResponse';
import { UserLogIn } from '../../Models/UserLogIn';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  showPassword = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get usernameValid(): IValidationResponse 
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let usernameControl = this.loginForm.get('username');

    if (!usernameControl?.touched) return response;

    if (usernameControl?.errors?.['required'])
      response.Message = "Username is required";
    else
      response.Success = true;

    return response;
  }

  get passwordValid(): IValidationResponse 
  {
    let response: IValidationResponse = { Success: false, Message: "" };
    let passwordControl = this.loginForm.get('password');

    if (!passwordControl?.touched) return response;

    if (passwordControl?.errors?.['required'])
      response.Message = "Password is required";
    else
      response.Success = true;

    return response;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() 
  {
      this.loginForm.markAllAsTouched();
  
      if (this.loginForm.valid) {
        const userLogin: UserLogIn = {
          UserName: this.loginForm.value.username,
          Password: this.loginForm.value.password
        };

        // Call API to login user
        
        this.router.navigate(['/home']);
        this.loginForm.reset();
      }
    }
}
