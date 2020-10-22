import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
