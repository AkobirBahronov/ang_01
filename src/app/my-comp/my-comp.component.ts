import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent {
  masterDataSource: any;
  constructor() {
    const serviceUrl: String =
      'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';
    this.masterDataSource = createStore({
      key: 'OrderID',
      loadUrl: serviceUrl + '/Orders',
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
}
