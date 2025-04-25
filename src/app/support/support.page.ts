import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
  imports: [IonicModule, RouterModule],
})
export class SupportPage {
  constructor(private router: Router) {}

  goToBug() {
    this.router.navigate(['/report-bug']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
