import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent {
  checkboxValue: boolean = false;

  constructor() {
    this.validationCheck = this.validationCheck.bind(this);
  }

  validate(e: any) {
    e.validationGroup.validate();
  }
  validationCheck(e: any) {
    if (this.checkboxValue) {
      return !!e.value;
    }
    return true;
  }
}
