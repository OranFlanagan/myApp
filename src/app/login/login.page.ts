import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', 
  styleUrls: ['./login.page.scss'],
  standalone: true,              
  imports: [IonicModule, ReactiveFormsModule, RouterLink],
})
export class LoginPage {
  // Define the reactive form using FormBuilder
  loginForm = this.fb.group({
    name: ['',                        // Initial value for the 'name' control
      [
        Validators.required,     // Name is required
        Validators.minLength(2)  // Minimum length of 2 characters
      ]
    ],
    email: [
      '',                        // Initial value for the 'email' control
      [
        Validators.required,     // Email is required
        Validators.email         // Must be a valid email format
      ]
    ],
    password: [
      '',                        // Initial value for the 'password' control
      [
        Validators.required,     // Password is required
        Validators.minLength(6)  // Minimum length of 6 characters
      ]
    ]
  });

  constructor(
    private fb: FormBuilder        // Inject FormBuilder to create form group
  ) {}

  async onSubmit() {
    if (this.loginForm.invalid) {
      // If the form is invalid, you might show errors or return early
      return;
    }
    
    const { name } = this.loginForm.value;

    console.log('Logging in user:', name);
  }
}
