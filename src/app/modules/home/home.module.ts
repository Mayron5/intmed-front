import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CustomButtonModule } from 'src/app/components/custom-button/custom-button.module';
import { NewScheduleModule } from 'src/app/components/new-schedule/new-schedule.module';
import { ModalConfirmationModule } from 'src/app/components/modal-confirmation/modal-confirmation.module';
import { AlertMessageModule } from 'src/app/components/alert-message/alert-message.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    CustomButtonModule,
    NewScheduleModule,
    ModalConfirmationModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
