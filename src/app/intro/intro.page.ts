import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonToolbar, IonBackButton, IonButtons, IonCol, IonRow, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonButtons, IonBackButton, IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
