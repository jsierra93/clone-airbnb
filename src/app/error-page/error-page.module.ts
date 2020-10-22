import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './components/page404/page404.component';
import { ErrorPageRoutingModule } from './error-page-routing.module';



@NgModule({
  declarations: [Page404Component],
  imports: [
    CommonModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
