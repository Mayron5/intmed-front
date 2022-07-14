import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from './modal-confirmation.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';

@NgModule({
  imports: [
    CommonModule,
    CustomButtonModule
  ],
  declarations: [ModalConfirmationComponent],
  exports: [ModalConfirmationComponent]
})
export class ModalConfirmationModule { }
