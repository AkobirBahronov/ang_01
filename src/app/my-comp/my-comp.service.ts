import { Injectable } from '@angular/core';

export class Data {
  ID: number;
  EmployeeID: number;
  LocationID: number;
  OrderID: number;
}

export class NewData {
  ID: number;
  EmployeeID: number;
  LocationID: number;
  OrderID: number;
  Price: number;
  Count: number;
}

export class Employee {
  ID: number;
  Name: string;
}
export class Location {
  ID: number;
  Name: string;
}
export class Order {
  ID: number;
  Name: string;
  LocationID: number;
  EmployeeID: number;
}

const data: Data[] = [
  {
    ID: 1,
    EmployeeID: 2,
    LocationID: 5,
    OrderID: 17,
  },
  {
    ID: 2,
    EmployeeID: 4,
    LocationID: 3,
    OrderID: 9,
  },
  {
    ID: 3,
    EmployeeID: 1,
    LocationID: 4,
    OrderID: 14,
  },
  {
    ID: 4,
    EmployeeID: 8,
    LocationID: 3,
    OrderID: 8,
  },
  {
    ID: 5,
    EmployeeID: 9,
    LocationID: 1,
    OrderID: 10,
  },
  {
    ID: 6,
    EmployeeID: 5,
    LocationID: 2,
    OrderID: 6,
  },
  {
    ID: 7,
    EmployeeID: 7,
    LocationID: 5,
    OrderID: 20,
  },
  {
    ID: 8,
    EmployeeID: 10,
    LocationID: 1,
    OrderID: 3,
  },
  {
    ID: 9,
    EmployeeID: 6,
    LocationID: 1,
    OrderID: 19,
  },
  {
    ID: 10,
    EmployeeID: 3,
    LocationID: 2,
    OrderID: 1,
  },
];

const newData: NewData[] = data.map((d) => ({
  ...d,
  Price: Math.floor(Math.random() * 700) + 300,
  Count: randomSelect([1, 2, 3, 4, 5]),
}));

const employees: Employee[] = [
  {
    ID: 1,
    Name: 'John',
  },
  {
    ID: 2,
    Name: 'Olivia',
  },
  {
    ID: 3,
    Name: 'Robert',
  },
  {
    ID: 4,
    Name: 'Greta',
  },
  {
    ID: 5,
    Name: 'Brett',
  },
  {
    ID: 6,
    Name: 'Sandra',
  },
  {
    ID: 7,
    Name: 'Kevin',
  },
  {
    ID: 8,
    Name: 'Cynthia',
  },
  {
    ID: 9,
    Name: 'Kent',
  },
  {
    ID: 10,
    Name: 'Taylor',
  },
];

const locations: Location[] = [
  {
    ID: 1,
    Name: 'Alabama',
  },
  {
    ID: 2,
    Name: 'Alaska',
  },
  {
    ID: 3,
    Name: 'Arizona',
  },
  {
    ID: 4,
    Name: 'Arkansas',
  },
  {
    ID: 5,
    Name: 'California',
  },
];

const orders: Order[] = [
  {
    ID: 1,
    Name: 'Order1',
    EmployeeID: 3,
    LocationID: 2,
  },
  {
    ID: 2,
    Name: 'Order2',
    EmployeeID: 4,
    LocationID: 1,
  },
  {
    ID: 3,
    Name: 'Order3',
    EmployeeID: 10,
    LocationID: 1,
  },
  {
    ID: 4,
    Name: 'Order4',
    EmployeeID: 2,
    LocationID: 3,
  },
  {
    ID: 5,
    Name: 'Order5',
    EmployeeID: 8,
    LocationID: 1,
  },
  {
    ID: 6,
    Name: 'Order6',
    EmployeeID: 5,
    LocationID: 2,
  },
  {
    ID: 7,
    Name: 'Order7',
    EmployeeID: 9,
    LocationID: 4,
  },
  {
    ID: 8,
    Name: 'Order8',
    EmployeeID: 8,
    LocationID: 3,
  },
  {
    ID: 9,
    Name: 'Order9',
    EmployeeID: 4,
    LocationID: 3,
  },
  {
    ID: 10,
    Name: 'Order10',
    EmployeeID: 9,
    LocationID: 1,
  },
  {
    ID: 11,
    Name: 'Order11',
    EmployeeID: 10,
    LocationID: 5,
  },
  {
    ID: 12,
    Name: 'Order12',
    EmployeeID: 4,
    LocationID: 2,
  },
  {
    ID: 13,
    Name: 'Order13',
    EmployeeID: 1,
    LocationID: 3,
  },
  {
    ID: 14,
    Name: 'Order14',
    EmployeeID: 1,
    LocationID: 4,
  },
  {
    ID: 15,
    Name: 'Order15',
    EmployeeID: 8,
    LocationID: 3,
  },
  {
    ID: 16,
    Name: 'Order16',
    EmployeeID: 7,
    LocationID: 2,
  },
  {
    ID: 17,
    Name: 'Order17',
    EmployeeID: 2,
    LocationID: 5,
  },
  {
    ID: 18,
    Name: 'Order18',
    EmployeeID: 4,
    LocationID: 4,
  },
  {
    ID: 19,
    Name: 'Order19',
    EmployeeID: 6,
    LocationID: 1,
  },
  {
    ID: 20,
    Name: 'Order20',
    EmployeeID: 7,
    LocationID: 5,
  },
];
for (let i = 1; i <= 280; i++) {
  orders.push({
    ID: i + 20,
    Name: 'Order' + (i + 20),
    LocationID: randomSelect(locations).ID,
    EmployeeID: randomSelect(employees).ID,
  });
}

function randomSelect(array: any) {
  return array[Math.floor(Math.random() * array.length)];
}

@Injectable()
export class Service {
  getData() {
    return newData;
  }
  getEmployees() {
    return employees;
  }
  getLocations() {
    return locations;
  }
  getOrders() {
    return orders;
  }
}
