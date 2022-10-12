import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value1: string = '';
  value2: string = '';
  onInput(event: any) {
    this.value1 = event.target.value;
  }
}
