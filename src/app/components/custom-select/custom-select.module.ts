import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import { FormsModule } from '@angular/forms';
import { CloseClickOutSideModule } from 'src/app/directives/closeClickOutSide/closeClickOutSide.module';
import { FilterListPipe } from 'src/app/pipes/filter-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CloseClickOutSideModule
  ],
  declarations: [CustomSelectComponent, FilterListPipe],
  exports: [CustomSelectComponent]
})
export class CustomSelectModule { }
