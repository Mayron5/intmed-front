import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewScheduleComponent } from './new-schedule.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomButtonModule,
    ReactiveFormsModule
  ],
  declarations: [NewScheduleComponent],
  exports: [NewScheduleComponent]
})
export class NewScheduleModule { }
