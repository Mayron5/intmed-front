import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.sass']
})
export class AlertMessageComponent implements OnInit {

  @Input() public message: string = '';
  @Input() public type: string = 'DANGER';

  constructor() { }

  ngOnInit() {
  }

  public getColor() {
    switch (this.type) {
      case 'SUCCESS':
        return '#009900'
      default:
        return '#e03b26';
    }
  }
}
