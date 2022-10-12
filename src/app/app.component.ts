import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myComponentValue: string = 'test';
  onMyComponentGetValueClick(e?: string): void {
    alert(e);
  }
}
