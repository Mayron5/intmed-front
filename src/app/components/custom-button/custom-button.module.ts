import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomButtonComponent],
  exports: [CustomButtonComponent]
})
export class CustomButtonModule { }
