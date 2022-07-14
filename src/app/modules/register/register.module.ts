import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FloatInputModule } from 'src/app/components/float-input/float-input.module';
import { CustomButtonModule } from 'src/app/components/custom-button/custom-button.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageModule } from 'src/app/components/alert-message/alert-message.module';

@NgModule({
  imports: [
    CommonModule,
    FloatInputModule,
    CustomButtonModule,
    AlertMessageModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
