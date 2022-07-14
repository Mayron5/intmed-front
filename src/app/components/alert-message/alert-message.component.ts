import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.sass']
})
export class AlertMessageComponent implements OnInit {

  @Input() public message: string = '';

  constructor() { }

  ngOnInit() {
  }

}
