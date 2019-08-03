import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarDefaultComponent } from './components/navbar-default/navbar-default.component';
import { WhatWeOfferComponent } from './components/what-we-offer/what-we-offer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    WhatWeOfferComponent,
    NavbarDefaultComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
