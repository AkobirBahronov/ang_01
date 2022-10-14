import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { PopupContentComponent } from './popup-content/popup-content.component';

@NgModule({
  declarations: [AppComponent, MyCompComponent, PopupContentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DxButtonModule,
    DxTextBoxModule,
    DxPopupModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
