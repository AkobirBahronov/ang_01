import { Component, ViewChild } from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import ODataContext from 'devextreme/data/odata/context';
import DataGrid from 'devextreme/ui/data_grid';

@Component({
  selector: 'chart-comp',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @ViewChild('popup', { static: false }) popup: DxPopupComponent;
  dataGridInstance: DataGrid;
  context: ODataContext | any;
  dataSource: DataSource;
  gridColumns = [
    'ProductName',
    'QuantityPerUnit',
    'UnitPrice',
    'UnitsInStock',
    'UnitsOnOrder',
  ];
  constructor() {
    this.context = new ODataContext({
      url: 'https://services.odata.org/V3/Northwind/Northwind.svc/',
      entities: {
        Categories: {
          key: 'CategoryID',
          keyType: 'Int32',
        },
        Products: {
          key: 'ProductID',
          keyType: 'Int32',
        },
      },
    });
    this.dataSource = new DataSource({
      store: this.context.Categories,
      expand: ['Products'],
      map: function (dataItem: any) {
        return {
          ...dataItem,
          ProductCount: dataItem.Products.length,
        };
      },
    });
  }
  onPointClick(e: any) {
    this.popup.instance.option({
      title: e.target.data.CategoryName,
    });
    this.popup.instance.show();
    this.dataGridInstance.option('dataSource', e.target.data.Products);
  }
  onGridInitialized(e: any) {
    this.dataGridInstance = e.component;
  }
}
