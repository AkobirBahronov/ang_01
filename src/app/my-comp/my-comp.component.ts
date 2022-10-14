import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Product, Service } from './my-comp.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
  providers: [Service],
})
export class MyCompComponent {
  products: Product[];

  store: CustomStore;
  constructor(service: Service) {
    this.products = service.getProducts();
    this.store = new CustomStore({
      key: 'id',
      loadMode: 'raw',
      load: async () => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              resolve(this.products);
            }, 300)
          );
        } catch (err) {
          throw 'Data loading error';
        }
      },
      insert: async (values: any) => {
        try {
          return await new Promise((resolve, reject) =>
            setTimeout(() => {
              const newEl = { id: this.products.length, name: values };
              this.products.push(newEl);
              resolve(newEl);
            }, 300)
          );
        } catch (err) {
          throw 'Insertion failed';
        }
      },
    });
  }

  addCustomItem(data: any) {
    if (!data.text) {
      data.customItem = null;
      return;
    }
    data.customItem = this.store
      .insert(data.text)
      .then((result) => {
        notify('New Element is added!');
        return result;
      })
      .catch((error) => {
        throw error;
      });
  }
}
