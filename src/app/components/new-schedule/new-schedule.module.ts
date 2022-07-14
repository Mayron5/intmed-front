import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewScheduleComponent } from './new-schedule.component';
import { CustomButtonModule } from '../custom-button/custom-button.module';
import { CustomSelectModule } from '../custom-select/custom-select.module';

@NgModule({
  imports: [
    CommonModule,
    CustomButtonModule,
    CustomSelectModule
  ],
  declarations: [NewScheduleComponent],
  exports: [NewScheduleComponent]
})
export class NewScheduleModule { }
