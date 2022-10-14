import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent {
  value: string = '';
  popupVisible: boolean = false;

  onClick() {
    this.popupVisible = true;
  }
  onValueChange(val?: string): void {
    this.value = val || '';
  }
}
