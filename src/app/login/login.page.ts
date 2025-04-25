import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, Validators, } from '@angular/forms';
import { RouterLink} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, RouterLink],
})
export class LoginPage 
{
  loginForm= this.fb.group
  (
    {
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
    }
  );

  constructor(private fb: FormBuilder) {}

  async onSubmit() {
    const { name } = this.loginForm.value;
  }
}
