import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myComponentValue: string = '';
  onMyComponentGetValueClick(e?: string): void {
    notify({ message: e, width: 300 }, 'success', 500);
  }
}
