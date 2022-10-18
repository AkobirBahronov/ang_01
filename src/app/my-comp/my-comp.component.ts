import { Component } from '@angular/core';
import { Service, Data, Employee, Location, Order } from './my-comp.service';
@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
  providers: [Service],
})
export class MyCompComponent {
  dataSource: Data[];
  employees: Employee[];
  locations: Location[];
  orders: Order[];
  constructor(private service: Service) {
    this.dataSource = service.getData();
    this.employees = service.getEmployees();
    this.locations = service.getLocations();
    this.orders = service.getOrders();

    this.getFilteredOrders = this.getFilteredOrders.bind(this);
  }

  getFilteredOrders(options: any) {
    if (options.data?.LocationID) {
      return {
        store: this.orders,
        filter: options.data
          ? [
              ['LocationID', '=', options.data.LocationID],
              'and',
              ['EmployeeID', '=', options.data.EmployeeID],
            ]
          : null,
      };
    } else {
      return {
        store: this.orders,
        filter: options.data
          ? ['EmployeeID', '=', options.data.EmployeeID]
          : null,
      };
    }
  }

  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow' && e.dataField === 'OrderID') {
      e.editorOptions.disabled = typeof e.row.data.EmployeeID !== 'number';
    }
    if (e.parentType === 'dataRow' && e.dataField === 'LocationID') {
      e.editorOptions.disabled = typeof e.row.data.EmployeeID !== 'number';
    }
  }

  setEmployeeValue(rowData: any, value: any): void {
    rowData.LocationID = null;
    rowData.OrderID = null;
    (<any>this).defaultSetCellValue(rowData, value);
  }

  setLocationValue(rowData: any, value: any): void {
    rowData.OrderID = null;
    (<any>this).defaultSetCellValue(rowData, value);
  }

  calculateSalesAmount(rowData: any) {
    if (!rowData.Price || !rowData.Count) {
      return 0;
    }
    return rowData.Price * rowData.Count;
  }
}
