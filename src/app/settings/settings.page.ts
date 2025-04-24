import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class ProfilePage {
  profileForm = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    password:['', [Validators.minLength(6)]],
    dob:     [''],
    gender:  ['']
  });

  originalValues = this.profileForm.value;

  constructor(private fb: FormBuilder) {}
  isChanged(field: string) 
  {
    return this.profileForm.get(field)?.value !== (this.originalValues as any)[field];
  }

  updateField(field: string) 
  {
    const newValue = this.profileForm.get(field)?.value;
    (this.originalValues as any)[field] = newValue;
    console.log(`Updated ${field}:`, newValue);
  }
}
