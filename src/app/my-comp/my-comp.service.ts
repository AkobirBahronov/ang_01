import { Injectable } from '@angular/core';

export class Product {
  id: number = 0;
  name: string = '';
}

const data: string[] = [];

const products: Product[] = data
  .slice(0, 100)
  .map((d, i) => ({ id: i, name: d }));

@Injectable()
export class Service {
  getProducts(): Product[] {
    return products;
  }
}
