import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import {Browser} from '@capacitor/browser';
import { CommonModule }from'@angular/common';
import { RouterLink}from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule, RouterLink],
})
export class SettingsPage implements OnInit
{
  profileForm = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    password:['', [Validators.minLength(6)]],
    dob:     [''],
    gender:  ['']
  });

  originalValues = this.profileForm.value;
  name: any;

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

  isDark = document.body.classList.contains('dark');

  toggleDark(event: any) {
    const shouldEnable = event.detail.checked;
    document.body.classList.toggle('dark', shouldEnable);
    localStorage.setItem('darkMode', shouldEnable ? 'true' : 'false');
  }

  async ngOnInit() 
  {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      this.isDark = saved === 'true';
      document.body.classList.toggle('dark', this.isDark);
    }
  }

  async openBrowser()
  {
    await Browser.open({ url: 'https://www.facebook.com/aughawillangaa/'});
  };

  async openClubNotes()
  {
    await Browser.open({url: 'https://aughawillangaa.wordpress.com/tag/gaa/'});
  };
  
  async openOneills()
  {
    await Browser.open({url: 'https://www.oneills.com/shop-by-team/gaa/ireland/aughawillan-gaa.html'});
  };

  async openFixtures()
  {
    await Browser.open({url: 'https://www.leitrimgaa.ie/fixtures-next-10-days/'})
  }

  async tickets()
  {
    await Browser.open({url: 'https://www.universe.com/users/leitrim-gaa-J10NQ5'})
  }
}
