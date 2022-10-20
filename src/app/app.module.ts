import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxButtonModule,
  DxChartModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxDropDownBoxModule,
  DxFormModule,
  DxPivotGridModule,
  DxPopupModule,
  DxSchedulerModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxValidatorModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { ChartComponent } from './chart/chart.component';
import { PivotGridComponent } from './pivot-grid/pivot-grid.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    DetailGridComponent,
    ChartComponent,
    PivotGridComponent,
    SchedulerComponent,
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
    DxPivotGridModule,
    DxSchedulerModule,
    DxDropDownBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
