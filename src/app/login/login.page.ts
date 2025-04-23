import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {IonContent, IonHeader, IonButton, IonToolbar, IonButtons, IonBackButton, IonLabel, IonItem, IonInput, IonTitle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonHeader, IonButton, IonToolbar, IonButtons, IonBackButton, IonLabel, IonItem, IonInput, IonTitle],
})
export class LoginPage {
  // simple properties — no FormsModule needed
  name = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  goToHome() {
    // pass the current values as query params
    this.router.navigate(['/home'], {
      queryParams: {
        name: this.name,
        email: this.email,
        password: this.password,
      },
    });
  }
}