import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.sass']
})
export class ModalConfirmationComponent implements OnInit {

  @Input() id: any;
  @Output()  closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.id)
  }

  public closeModal() {
    this.closeEvent.emit(false);
  }

}
