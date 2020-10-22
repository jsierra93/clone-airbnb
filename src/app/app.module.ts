import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { RouterModule } from '@angular/router';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { BookingModule } from './booking/booking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DetailModule,
    RouterModule,
    SignupModule,
    SigninModule,
    BookingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
