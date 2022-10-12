import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css'],
})
export class MyCompComponent implements OnInit {
  @Input()
  value: string = '';

  @Output()
  onGetValueClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onClick(value: string) {
    this.onGetValueClick.emit(value);
  }

  ngOnInit(): void {}
}
