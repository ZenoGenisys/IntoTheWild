import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { Footer1Component } from './footer/footer1/footer1.component';
import { Footer2Component } from './footer/footer2/footer2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderTextComponent } from './component/slider-text/slider-text.component';
import { FooterSlideComponent } from './component/footer-slide/footer-slide.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    HomeComponent,
    Footer1Component,
    Footer2Component,
    SliderTextComponent,
    FooterSlideComponent,
    RoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
