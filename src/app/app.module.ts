import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxChartModule,
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
import { DataGridComponent } from './data-grid/data-grid.component';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    DetailGridComponent,
    ChartComponent,
  ],
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
    DxChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
