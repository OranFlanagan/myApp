import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-fundrasier',
  templateUrl: './fundrasier.page.html',
  styleUrls: ['./fundrasier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FundrasierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
