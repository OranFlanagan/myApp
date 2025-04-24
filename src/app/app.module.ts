// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';  // ← import here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    declarations: [AppComponent],
})
export class AppModule {}
