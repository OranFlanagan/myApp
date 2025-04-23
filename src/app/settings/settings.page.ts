import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, User } from '../services/user.service';
import { IonContent,IonHeader, IonButton, IonToolbar, IonButtons, IonBackButton, IonLabel, IonItem, IonInput, IonTitle, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports:[IonContent, IonHeader, IonToolbar, IonButton, IonButtons, IonBackButton,  IonTitle, IonItem, IonInput, IonLabel, IonText],

})
export class SettingsPage implements OnInit {
    name = '';
    email = '';
    password = '';
  
    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.name = params['name'] || '';
        this.email = params['email'] || '';
        this.password = params['password'] || '';
      });
    }
  
    savePassword() {
      // Handle your password update logic here,
      // then navigate back or show a confirmation.
      this.router.navigate(['/pages/login'], {
        queryParams: { name: this.name, email: this.email, password: this.password },
      });
    }
  }