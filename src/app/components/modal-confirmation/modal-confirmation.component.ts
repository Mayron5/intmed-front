import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.sass']
})
export class ModalConfirmationComponent implements OnInit {

  @Input() id: any;
  @Output()  closeEvent = new EventEmitter();

  constructor(
    private _scheduleService: ScheduleService
  ) { }

  ngOnInit() {
  }

  public closeModal() {
    this.closeEvent.emit(false);
  }

  public confirm() {
    this._scheduleService.deleteSchedule(this.id);
    this.closeModal();
  }

}
