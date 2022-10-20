import { Injectable } from '@angular/core';

export class User {
  id: number;
  text: string;
  age: number;
  discipline: string;
  color: string;
}

export class Appointment {
  userId: number;
  text: string;
  startDate: Date;
  endDate: Date;
  recurrence?: string;
}

const users: User[] = [
  {
    id: 1,
    text: 'John',
    age: 27,
    discipline: 'ABS, FitBall, StepFit',
    color: '#56ca85',
  },
  {
    id: 2,
    text: 'Jane',
    age: 25,
    discipline: 'ABS, FitBall, StepFit',
    color: '#ff9747',
  },
];
const appointments: Appointment[] = [
  {
    userId: 1,
    text: 'Rachael',
    startDate: new Date('2016-08-22T08:45:00.000Z'),
    endDate: new Date('2016-08-22T11:45:00.000Z'),
  },
  {
    userId: 1,
    text: 'Alex',
    startDate: new Date('2016-08-03T10:00:00.000Z'),
    endDate: new Date('2016-08-03T12:15:00.000Z'),
    recurrence: 'FREQ=DAILY;BYDAY=WE,SA;UNTIL=20170101',
  },
  {
    userId: 2,
    text: 'Kelly',
    startDate: new Date('2016-08-02T09:00:00.000Z'),
    endDate: new Date('2016-08-02T11:00:00.000Z'),
    recurrence: 'FREQ=MONTHLY;BYMONTHDAY=2;COUNT=5',
  },
  {
    userId: 2,
    text: 'Helen',
    startDate: new Date('2016-08-11T19:15:00.000Z'),
    endDate: new Date('2016-08-13T09:30:00.000Z'),
  },
];

@Injectable()
export class Service {
  getUsers() {
    return users;
  }
  getAppointments() {
    return appointments;
  }
}
