import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PhotoFormComponent,
  ],
  imports: [
  CommonModule,
    HttpClientModule
  ],
})
export class PhotoFormModule { }
