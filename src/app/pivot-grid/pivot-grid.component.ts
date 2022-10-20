import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DxChartComponent, DxPivotGridComponent } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { Service, Sale } from './pivot-grid.service';

@Component({
  selector: 'pivot-grid',
  templateUrl: './pivot-grid.component.html',
  styleUrls: ['./pivot-grid.component.css'],
  providers: [Service],
})
export class PivotGridComponent implements AfterViewInit {
  dataSource: PivotGridDataSource;
  sales: Sale[];

  @ViewChild('pivotGrid', { static: false }) pivotGrid: DxPivotGridComponent;
  @ViewChild('stackedBarChart', { static: false }) barChart: DxChartComponent;

  constructor(service: Service) {
    this.sales = service.getSales();
    this.dataSource = new PivotGridDataSource({
      fields: [
        {
          caption: 'Region',
          width: 120,
          dataField: 'region',
          area: 'row',
        },
        {
          caption: 'City',
          dataField: 'city',
          width: 150,
          area: 'row',
          selector(data: any) {
            return `${data.city} (${data.country})`;
          },
        },
        {
          dataField: 'date',
          dataType: 'date',
          area: 'column',
        },
        {
          caption: 'Sales',
          dataField: 'amount',
          dataType: 'number',
          summaryType: 'sum',
          format: 'currency',
          area: 'data',
        },
        {
          caption: 'My Sales',
          dataType: 'number',
          summaryType: 'sum',
          calculateSummaryValue: function (e) {
            if (e.field('row') === null) {
              return e.value() / 1.5;
            }
            return e.value();
          },
          format: 'currency',
          area: 'data',
          selector(data: any) {
            return data.amount * 3;
          },
        },
      ],
      store: this.sales,
    });
  }

  ngAfterViewInit() {
    this.pivotGrid.instance.bindChart(this.barChart.instance, {
      dataFieldsDisplayMode: 'singleAxis',
      alternateDataFields: false,
      putDataFieldsInto: 'series',
      customizeChart: function (chartOptions: any) {
        chartOptions.valueAxis.forEach((v: any) => {
          v.visualRange = {
            startValue: 0,
            endValue: null,
          };
        });
        return chartOptions;
      },
      customizeSeries: function (seriesName: any, seriesOptions: any) {
        if (seriesName.includes('My Sales')) {
          seriesOptions.stack = 'My Sales';
        } else {
          seriesOptions.stack = 'Sales';
        }
        return seriesOptions;
      },
    });
  }
}
