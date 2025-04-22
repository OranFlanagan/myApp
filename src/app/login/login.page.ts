import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonLabel, IonItem, IonButton, IonButtons, IonBackButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonBackButton, IonButtons, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Save the data in localStorage (you could also save this to a backend)
      const userData = this.loginForm.value;
      localStorage.setItem('user', JSON.stringify(userData));

      // Redirect to another page (e.g., home or dashboard)
      this.router.navigate(['/main']);
    } else {
      console.log('Form is invalid');
    }
  }
}
