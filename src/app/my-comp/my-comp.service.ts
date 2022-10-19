import { Injectable } from '@angular/core';

export class Employee {
  ID: number;

  FirstName: string;

  LastName: string;

  Prefix: string;

  Position: string;

  BirthDate: string;

  State: string;

  [key: string]: any;
}

const employees = [
  {
    ID: 1,
    Prefix: 'Mr.',
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    State: 'California',
    BirthDate: '1964/03/16',
  },
  {
    ID: 2,
    Prefix: 'Mrs.',
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Position: 'Sales Assistant',
    State: 'California',
    BirthDate: '1981/06/03',
  },
  {
    ID: 3,
    Prefix: 'Mr.',
    FirstName: 'Robert',
    LastName: 'Reagan',
    Position: 'CMO',
    State: 'Arkansas',
    BirthDate: '1974/09/07',
  },
  {
    ID: 4,
    Prefix: 'Ms.',
    FirstName: 'Greta',
    LastName: 'Sims',
    Position: 'HR Manager',
    State: 'Georgia',
    BirthDate: '1977/11/22',
  },
  {
    ID: 5,
    Prefix: 'Mr.',
    FirstName: 'Brett',
    LastName: 'Wade',
    Position: 'IT Manager',
    State: 'Idaho',
    BirthDate: '1968/12/01',
  },
  {
    ID: 6,
    Prefix: 'Mrs.',
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Position: 'Controller',
    State: 'Utah',
    BirthDate: '1974/11/15',
  },
  {
    ID: 7,
    Prefix: 'Mr.',
    FirstName: 'Kevin',
    LastName: 'Carter',
    Position: 'Shipping Manager',
    State: 'California',
    BirthDate: '1978/01/09',
  },
  {
    ID: 8,
    Prefix: 'Ms.',
    FirstName: 'Cynthia',
    LastName: 'Stanwick',
    Position: 'HR Assistant',
    State: 'Arkansas',
    BirthDate: '1985/06/05',
  },
  {
    ID: 9,
    Prefix: 'Dr.',
    FirstName: 'Kent',
    LastName: 'Samuelson',
    Position: 'Ombudsman',
    State: 'Missouri',
    BirthDate: '1972/09/11',
  },
];

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }
}
