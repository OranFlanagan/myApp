import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonButtons, IonToggle, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './app-mode.page.html',
  styleUrls: ['./app-mode.page.scss'],
  standalone: true,
  imports: [IonItem, IonToggle, IonButtons, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AppModePage {
  isDark = document.body.classList.contains('dark');

  toggleDark(event: any) {
    const shouldEnable = event.detail.checked;
    document.body.classList.toggle('dark', shouldEnable);
    localStorage.setItem('darkMode', shouldEnable ? 'true' : 'false');
  }

  ngOnInit() {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      this.isDark = saved === 'true';
      document.body.classList.toggle('dark', this.isDark);
    }
  }
}

