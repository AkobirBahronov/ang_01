import { Component, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { Service, User, Appointment } from './scheduler.service';
import DataGrid from 'devextreme/ui/data_grid';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'scheduler-comp',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
  providers: [Service],
})
export class SchedulerComponent {
  users: User[];
  appointments: Appointment[];
  resources: any;
  currentDate: Date = new Date(2016, 7, 1);
  gridBoxValue: number[] = [1, 2];
  gridDataSource: DataSource;

  @ViewChild('scheduler', { static: false }) scheduler: DxSchedulerComponent;

  constructor(service: Service) {
    this.users = service.getUsers();
    this.appointments = service.getAppointments();
    this.resources = [{ fieldExpr: 'userId', dataSource: this.users }];
    this.gridDataSource = new DataSource({
      store: {
        type: 'array',
        data: this.users,
        key: 'id',
      },
    });
  }
  onSelectionChanged(selectedItems: any) {
    const keys = selectedItems.selectedRowKeys;
    var resources = this.scheduler.instance.option('resources');
    var newDS = this.users.filter((r) => keys.includes(r.id));
    this.resources[0].dataSource = newDS;
    this.scheduler.instance.option('resources', resources);
  }
}
