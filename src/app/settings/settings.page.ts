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
export class SettingsPage implements OnInit {
  profileForm = this.fb.group({
    name: [
      '',                        
      [
        Validators.required,   
        Validators.minLength(2)
      ]
    ],
    email: [
      '',                         // Initial value for 'email'
      [
        Validators.required,      
        Validators.email          // Must follow email format
      ]
    ],
    password: [
      '',                         
      [
        Validators.minLength(6)   // If provided, must be at least 6 chars
      ]
    ],
    dob: [
      ''                          // Date of birth (optional)
    ],
    gender: [
      ''                          // Gender selection (optional)
    ]
  });

  originalValues = this.profileForm.value;

  // Placeholder for bound name property if needed elsewhere
  name: any;

  constructor(
    private fb: FormBuilder         // Inject FormBuilder to build reactive form
  ) {}

  
  //Check if a specific form field has changed from its original value.
  isChanged(field: string): boolean {
    const currentValue = this.profileForm.get(field)?.value;
    const original = (this.originalValues as any)[field];
    return currentValue !== original;
  }


  updateField(field: string): void {
    const newValue = this.profileForm.get(field)?.value;
    (this.originalValues as any)[field] = newValue;
    console.log(`Updated ${field}:`, newValue);
  }

  // Check if the 'dark' CSS class is present on body (initial dark mode state)
  isDark = document.body.classList.contains('dark');

  //Toggle dark mode on or off based on user toggle event.
  toggleDark(event: any): void {
    const shouldEnable = event.detail.checked;
    document.body.classList.toggle('dark', shouldEnable);
    localStorage.setItem('darkMode', shouldEnable ? 'true' : 'false');
  }

  //On component init, read persisted dark mode setting and apply it.
  async ngOnInit(): Promise<void> {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      this.isDark = saved === 'true';
      document.body.classList.toggle('dark', this.isDark);
    }
  }
  async openBrowser(): Promise<void> {
    await Browser.open({ url: 'https://www.facebook.com/aughawillangaa/' });
  }

  // Shortcut method to open the club's blog/tag page
  async openClubNotes(): Promise<void> {
    await Browser.open({ url: 'https://aughawillangaa.wordpress.com/tag/gaa/' });
  }

  // Shortcut method to open the official O'Neills team shop
  async openOneills(): Promise<void> {
    await Browser.open({ url: 'https://www.oneills.com/shop-by-team/gaa/ireland/aughawillan-gaa.html' });
  }

  // Shortcut method to open upcoming fixture list
  async openFixtures(): Promise<void> {
    await Browser.open({ url: 'https://www.leitrimgaa.ie/fixtures-next-10-days/' });
  }

  // Shortcut method to open ticket purchasing page
  async tickets(): Promise<void> {
    await Browser.open({ url: 'https://www.universe.com/users/leitrim-gaa-J10NQ5' });
  }
}

