import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  popupValue: string = '';
  popupVisible: boolean = false;
  onMyComponentGetValueClick(e?: string): void {
    this.popupValue = e || '';
    this.popupVisible = true;
  }
}
