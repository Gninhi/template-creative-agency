import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Modules */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarDefaultComponent } from './components/navbar-default/navbar-default.component';
import { WhatWeOfferComponent } from './components/what-we-offer/what-we-offer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    WelcomeComponent,
    WhatWeOfferComponent,
    NavbarDefaultComponent,
    WhyChooseUsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
