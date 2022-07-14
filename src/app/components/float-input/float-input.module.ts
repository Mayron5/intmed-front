import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatInputComponent } from './float-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [FloatInputComponent],
  exports: [FloatInputComponent]
})
export class FloatInputModule { }
