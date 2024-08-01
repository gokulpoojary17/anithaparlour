import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSignInMode = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.isSignInMode) {
      // Handle sign-in logic here
      console.log('Signing in:', this.loginForm.value.email, this.loginForm.value.password);
    } else {
      // Handle registration logic here
      console.log('Registering:', this.loginForm.value.firstName, this.loginForm.value.email, this.loginForm.value.password);
    }
  }

  toggleSignInMode(event: Event) {
    event.preventDefault();  // Prevents the default link behavior
    this.isSignInMode = !this.isSignInMode;
    this.loginForm.reset();  // Reset the form when toggling
  }
}
