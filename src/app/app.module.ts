import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Section01Component } from './section01/section01.component';
import { Section02Component } from './section02/section02.component';
import { FooterComponent } from './footer/footer.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { Section03Component } from './section03/section03.component';
import { Section04Component } from './section04/section04.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Section01Component,
    Section02Component,
    FooterComponent,
    VideoSectionComponent,
    Section03Component,
    Section04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
