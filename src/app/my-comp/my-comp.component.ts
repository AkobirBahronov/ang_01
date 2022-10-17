import { Component } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';
@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent {
  store: ArrayStore;
  dataSource: DataSource;
  names = [
    {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
    },
    {
      ID: 2,
      FirstName: 'Olivia',
      LastName: 'Peyton',
    },
    {
      ID: 3,
      FirstName: 'Robert',
      LastName: 'Reagan',
    },
    {
      ID: 4,
      FirstName: 'Greta',
      LastName: 'Sims',
    },
    {
      ID: 5,
      FirstName: 'Brett',
      LastName: 'Wade',
    },
    {
      ID: 6,
      FirstName: 'Sandra',
      LastName: 'Johnson',
    },
    {
      ID: 7,
      FirstName: 'Kevin',
      LastName: 'Carter',
    },
    {
      ID: 8,
      FirstName: 'Cynthia',
      LastName: 'Stanwick',
    },
    {
      ID: 9,
      FirstName: 'Kent',
      LastName: 'Samuelson',
    },
    {
      ID: 10,
      FirstName: 'Taylor',
      LastName: 'Riley',
    },
    {
      ID: 11,
      FirstName: 'Sam',
      LastName: 'Hill',
    },
    {
      ID: 12,
      FirstName: 'Kelly',
      LastName: 'Rodriguez',
    },
    {
      ID: 13,
      FirstName: 'Natalie',
      LastName: 'Maguirre',
    },
    {
      ID: 14,
      FirstName: 'Walter',
      LastName: 'Hobbs',
    },
  ];
  constructor() {
    this.dataSource = new DataSource({
      store: new ArrayStore({
        key: 'ID',
        data: this.names,
      }),
    });
    this.validationCheck = this.validationCheck.bind(this);
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
