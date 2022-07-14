import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.sass']
})
export class CustomButtonComponent implements OnInit {

  @Input() text: string = '';
  @Input() theme: string = '';
  @Input() type: string = 'button';

  constructor() { }

  ngOnInit() {
  }

}
