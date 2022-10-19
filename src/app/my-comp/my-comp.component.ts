import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Service, Employee } from './my-comp.service';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
  providers: [Service],
})
export class MyCompComponent {
  masterDataSource: CustomStore;
  employees: Employee[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.masterDataSource = new CustomStore({
      key: 'ID',
      load: async () => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => resolve(this.employees), 1000)
          );
        } catch (err) {
          throw 'Data loading error';
        }
      },
      insert: async (values) => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              this.employees.push(values);
              resolve(this.employees);
            }, 1000)
          );
        } catch (err) {
          throw 'Insertion failed';
        }
      },
      remove: async (key) => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              const index = this.employees.findIndex(
                (data) => (data['ID'] || data) == key
              );
              if (index > -1) {
                this.employees.splice(index, 1);
                resolve();
              } else {
                reject();
              }
            }, 5000)
          );
        } catch (err) {
          throw 'Deletion failed';
        }
      },
      update: async (key, values) => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              const index = this.employees.findIndex(
                (data) => (data['ID'] || data) == key
              );
              if (index > -1) {
                Object.keys(values).forEach((v: string) => {
                  this.employees[index][v] = values[v];
                });
                resolve(this.employees);
              } else {
                reject();
              }
            }, 1000)
          );
        } catch (err) {
          throw 'Update failed';
        }
      },
    });
  }
}
