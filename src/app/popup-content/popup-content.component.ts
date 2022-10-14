import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css'],
})
export class PopupContentComponent {
  @Input()
  value: string = '';

  @Output()
  onValueChange: EventEmitter<string> = new EventEmitter<string>();
}
