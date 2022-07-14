import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.sass']
})
export class CustomCheckboxComponent implements OnInit {

  public selected: boolean = false;
  @Output() selectedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleSelection(): void {
    this.selected = !this.selected;
  }

}
