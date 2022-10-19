import { Component, Input, AfterViewInit } from '@angular/core';

import CustomStore from 'devextreme/data/custom_store';
import { Service, Task } from './detail-grid.service';

@Component({
  selector: 'detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css'],
  providers: [Service],
})
export class DetailGridComponent implements AfterViewInit {
  @Input() key: number;
  detailDataSource: CustomStore;
  tasks: Task[];
  constructor(service: Service) {
    this.tasks = service.getTasks();
  }
  ngAfterViewInit() {
    this.tasks = this.tasks.filter((d) => d['EmployeeID'] == this.key);
    this.detailDataSource = new CustomStore({
      key: 'ID',
      load: async () => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => resolve(this.tasks), 1000)
          );
        } catch (err) {
          throw 'Data loading error';
        }
      },
      insert: async (values) => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              this.tasks.push(values);
              resolve(this.tasks);
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
              const index = this.tasks.findIndex(
                (data) => (data['ID'] || data) == key
              );
              if (index > -1) {
                this.tasks.splice(index, 1);
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
              const index = this.tasks.findIndex(
                (data) => (data['ID'] || data) == key
              );
              if (index > -1) {
                Object.keys(values).forEach((v) => {
                  this.tasks[index][v] = values[v];
                });
                resolve(this.tasks);
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
  completedValue(rowData: any) {
    return rowData.Status == 'Completed';
  }
}
