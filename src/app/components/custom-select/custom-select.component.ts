import { Component, Input, OnInit } from '@angular/core';
import { GrowVertical } from 'src/app/animations/growVertical';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.sass'],
  animations: [GrowVertical]
})
export class CustomSelectComponent implements OnInit {

  @Input() public placeholder: string = '';
  @Input() public options = ['Chrome', 'Internet Explore', 'Firefox', 'Opera', 'Coração', 'Açaí'];

  public expanded: boolean = false;
  public selected: string = '';

  constructor() { }

  ngOnInit() {
  }

  public toggleExpansion() {
    this.expanded = !this.expanded;
  }

  public setValueSelected(value: string) {
    this.selected = value;
    this.toggleExpansion();
  }

}
