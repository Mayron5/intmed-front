import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseClickOutSideDirective } from './closeClickOutSide.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CloseClickOutSideDirective],
  exports: [CloseClickOutSideDirective]
})

export class CloseClickOutSideModule { }
