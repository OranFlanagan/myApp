import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonSelectOption, IonButton,IonBackButton, IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.page.html',
  styleUrls: ['./report-bug.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton, IonButtons, IonContent]
})
export class ReportBugPage implements OnInit {

  bug = {
    subject: '',
    description: ''
  };

  submitBugReport() {
    console.log('Bug Report Submitted:', this.bug);
    // Here you can send the bug to an API endpoint
    alert('Bug submitted! Thank you!');
    
    // Optionally reset form
    this.bug = { subject: '', description: '' };
  }

  constructor() { }

  ngOnInit() {
  }
}