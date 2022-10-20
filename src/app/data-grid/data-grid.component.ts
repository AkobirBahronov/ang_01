import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxPopupComponent } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { Service, Employee } from './data-grid.service';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [Service],
})
export class DataGridComponent {
  gridDataSource: CustomStore;
  employees: Employee[];
  formInstance: any;
  saveBtnOptions: any;
  cancelBtnOptions: any;

  @ViewChild('popup', { static: false }) popup: DxPopupComponent;
  @ViewChild('dataGrid', { static: false }) dataGrid: DxDataGridComponent;

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.gridDataSource = this.createStore(this.employees, 'ID');
    this.saveBtnOptions = {
      text: 'Save',
      type: 'default',
      onClick: this.onSave.bind(this),
    };
    this.cancelBtnOptions = {
      text: 'Cancel',
      type: 'danger',
      onClick: () => this.popup.instance.hide(),
    };
  }
  editHandler(options: any) {
    this.popup.instance.show();
    this.formInstance.updateData(options.data);
  }
  onFormInitialized(e: any) {
    this.formInstance = e.component;
  }
  onSave() {
    const employeeData = this.formInstance.option('formData');
    if (employeeData.ID) {
      this.gridDataSource
        .update(employeeData.ID, employeeData)
        .then(() => this.dataGrid.instance.refresh())
        .catch((error) => {
          throw error;
        });
    } else {
      this.gridDataSource
        .insert(employeeData)
        .then(() => this.dataGrid.instance.refresh())
        .catch((error) => {
          throw error;
        });
    }
    this.popup.instance.hide();
  }
  onAddItem(e: any) {
    this.popup.instance.show();
    this.formInstance.option({
      formData: null,
    });
  }
  createStore(Source: any, keyName: string): CustomStore {
    return new CustomStore({
      key: keyName,
      load: async () => {
        try {
          return await new Promise((resolve, reject) => {
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
}
