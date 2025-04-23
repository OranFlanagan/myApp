import { Component } from '@angular/core';
import {Browser} from '@capacitor/browser';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton, IonCol, IonRow, IonGrid, IonFooter } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonFooter, IonGrid, IonRow, IonCol, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}

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
