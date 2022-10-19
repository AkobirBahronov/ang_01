import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { DetailGridComponent } from './detail-grid/detail-grid.component';

@NgModule({
  declarations: [AppComponent, MyCompComponent, DetailGridComponent],
  imports: [
    BrowserModule,
    FormsModule,
    DxButtonModule,
    DxTextBoxModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxValidatorModule,
    DxCheckBoxModule,
    DxFormModule,
    DxTemplateModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
