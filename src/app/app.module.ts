import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RfeButtonComponent } from './components/rfe-button/rfe-button.component';
import { RfeNavbarComponent } from './components/rfe-navbar/rfe-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RfeButtonComponent,
    RfeNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
