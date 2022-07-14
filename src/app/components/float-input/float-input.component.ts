import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-float-input',
  templateUrl: './float-input.component.html',
  styleUrls: ['./float-input.component.sass'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ]
})
export class FloatInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() formInputName: string = '';

  constructor() { }

  ngOnInit() {
  }

  public toggleTypePassword(): void {
    if (this.type === 'text') this.type = 'password';
    else this.type = 'text';
  }

}
