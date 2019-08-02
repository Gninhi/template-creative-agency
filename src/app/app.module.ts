import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { NavbarDefaultComponent } from './components/navbar-default/navbar-default.component';
import { NavbarFixedComponent } from './components/navbar-fixed/navbar-fixed.component';
=======
import { WelcomeComponent } from './components/welcome/welcome.component';
>>>>>>> b299e475773670d183aa3c8b578f6a52bc2c0cc9

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
    NavbarDefaultComponent,
    NavbarFixedComponent
=======
    WelcomeComponent
>>>>>>> b299e475773670d183aa3c8b578f6a52bc2c0cc9
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
