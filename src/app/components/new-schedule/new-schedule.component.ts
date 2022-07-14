import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.sass']
})
export class NewScheduleComponent implements OnInit {

  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public closeModal() {
    this.closeEvent.emit(false);
  }

}
