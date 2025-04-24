import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import{CommonModule}from'@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
})
export class ChangeNamePage {
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
