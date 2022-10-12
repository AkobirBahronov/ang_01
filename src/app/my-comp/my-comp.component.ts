import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent {
  orgValue: string = '';
  @Input()
  get value() {
    return this.orgValue;
  }
  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  set value(val) {
    this.orgValue = val;
    this.valueChange.emit(this.orgValue);
  }
  onClick(value: string) {
    this.orgValue = value;
  }
}
