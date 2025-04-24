import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, Validators, } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, RouterLink]
})
export class LoginPage {
  loginForm = this.fb.group
  (
    {
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
    }
  );

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.valid) 
    {
      const { name, email, password } = this.loginForm.value;
      console.log('Logging in:', name, email);
    } 
      else 
    {
      this.loginForm.markAllAsTouched();
    }
  }
}
