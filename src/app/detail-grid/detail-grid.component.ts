import { Component, Input, AfterViewInit } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css'],
})
export class DetailGridComponent implements AfterViewInit {
  @Input() key: number;
  detailDataSource: any;
  constructor() {}
  ngAfterViewInit() {
    const serviceUrl: String =
      'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';
    this.detailDataSource = createStore({
      loadUrl: serviceUrl + '/OrderDetails',
      loadParams: {
        orderID: this.key,
      },
      onBeforeSend: async (method, ajaxOptions) => {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
}
