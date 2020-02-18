import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    PhotoFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule
  ],
})
export class PhotoFormModule { }
