import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Service, Name } from './my-comp.service';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
  providers: [Service],
})
export class MyCompComponent {
  @ViewChild('grid', { static: false }) dataGrid: DxDataGridComponent;

  dataSource: Name[];

  constructor(service: Service) {
    this.dataSource = service.getData();
    this.validationCheck = this.validationCheck.bind(this);
  }

  onSaving(e: any) {
    console.log(e.changes[0].data);
    console.log(e);
  }

  onRowUpdating(e: any) {
    if (e.newData.FirstName === '' && e.newData.LastName === '') {
      e.newData.FirstName = 'John';
      e.newData.LastName = 'Doe';
    }
  }
  onRowInserting(e: any) {
    if (
      (!e.data.hasOwnProperty('FirstName') || !e.data.FirstName.trim()) &&
      (!e.data.hasOwnProperty('LastName') || !e.data.LastName.trim())
    ) {
      e.data.FirstName = 'John';
      e.data.LastName = 'Doe';
    }
  }

  validationCheck(options: any) {
    if (!options.data.FirstName && !options.data.LastName) {
      return true;
    }
    if (options.data.hasOwnProperty(options.column.dataField)) {
      return !!options.data[options.column.dataField].trim();
    }
    return false;
  }
}
