import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Section01Component } from './section01/section01.component';
import { Section02Component } from './section02/section02.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Section01Component,
    Section02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
