import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-clubnotes',
  templateUrl: './clubnotes.page.html',
  styleUrls: ['./clubnotes.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ClubnotesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
