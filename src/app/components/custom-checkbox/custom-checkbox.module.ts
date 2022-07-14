import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCheckboxComponent } from './custom-checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomCheckboxComponent],
  exports: [CustomCheckboxComponent]
})
export class CustomCheckboxModule { }
