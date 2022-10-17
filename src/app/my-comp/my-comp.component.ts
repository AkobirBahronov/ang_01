import { Component, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent {
  @ViewChild('form', { static: false }) form: DxFormComponent;
  constructor() {
    this.validationCheck = this.validationCheck.bind(this);
  }
  validate(e: any) {
    e.validationGroup.validate();
  }
  validationCheck(e: any) {
    const checkboxValue = this.form.instance
      .getEditor('checkbox')
      ?.option('value');
    if (checkboxValue) {
      return !!e.value;
    }
    return true;
  }
}
