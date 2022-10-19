import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Service, Employee, Task } from './my-comp.service';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
  providers: [Service],
})
export class MyCompComponent {
  masterDataSource: CustomStore;
  employees: Employee[];
  detailDataSource: CustomStore;
  tasks: Task[];
  key: number;
  createStore(Source: any, keyName: string): CustomStore {
    return new CustomStore({
      key: keyName,
      load: async () => {
        try {
          return await new Promise((resolve, reject) => {
            if (Source[0].EmployeeID) {
              return setTimeout(
                () =>
                  resolve(
                    Source.filter((d: any) => d['EmployeeID'] == this.key)
                  ),
                1000
              );
            }
            return setTimeout(() => resolve(Source), 1000);
          });
        } catch (err) {
          throw 'Data loading error';
        }
      },
      insert: async (values) => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              if (!values[keyName]) {
                values[keyName] = Source[Source.length - 1] + 1;
              }
              if (Source[0].EmployeeID && !values.EmployeeID) {
                values.EmployeeID = this.key;
              }
              Source.push(values);
              resolve(Source);
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
              const index = Source.findIndex(
                (data: any) => (data[keyName] || data) == key
              );
              if (index > -1) {
                Source.splice(index, 1);
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
              const index = Source.findIndex(
                (data: any) => (data[keyName] || data) == key
              );
              if (index > -1) {
                Object.keys(values).forEach((v: string) => {
                  Source[index][v] = values[v];
                });
                resolve(Source);
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
  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.masterDataSource = this.createStore(this.employees, 'ID');
    this.tasks = service.getTasks();
    this.detailDataSource = this.createStore(this.tasks, 'ID');
  }

  onRowExpanding(e: any) {
    this.key = e.key;
  }
  completedValue(rowData: any) {
    return rowData.Status == 'Completed';
  }
}
