import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ],
})
export class HomeModule { }