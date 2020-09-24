import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { AboutComponent } from './about/about.component';

var firebaseConfig = {
    apiKey: "AIzaSyAg_V_FpYDGfTNtC96qJD1_JIIZrGZ5lRs",
    authDomain: "marlietttaller.firebaseapp.com",
    databaseURL: "https://marlietttaller.firebaseio.com",
    projectId: "marlietttaller",
    storageBucket: "marlietttaller.appspot.com",
    messagingSenderId: "497843097189",
    appId: "1:497843097189:web:1a91f93164e6c45c9f008c",
    measurementId: "G-2D9WMLC1D1"
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ParallaxDirective,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AdminPanelModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
