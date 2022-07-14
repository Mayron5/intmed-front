import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FloatInputModule } from 'src/app/components/float-input/float-input.module';
import { CustomCheckboxModule } from 'src/app/components/custom-checkbox/custom-checkbox.module';
import { CustomButtonModule } from 'src/app/components/custom-button/custom-button.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertMessageModule } from 'src/app/components/alert-message/alert-message.module';

@NgModule({
  imports: [
    CommonModule,
    FloatInputModule,
    CustomCheckboxModule,
    CustomButtonModule,
    AlertMessageModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
