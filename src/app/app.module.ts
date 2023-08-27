import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Section01Component } from './section01/section01.component';
import { Section02Component } from './section02/section02.component';
import { FooterComponent } from './footer/footer.component';
import { Section03Component } from './section03/section03.component';
import { Section04Component } from './section04/section04.component';
import { Section05Component } from './section05/section05.component';
import { Section06Component } from './section06/section06.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Section01Component,
    Section02Component,
    FooterComponent,
    Section03Component,
    Section04Component,
    Section05Component,
    Section06Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
