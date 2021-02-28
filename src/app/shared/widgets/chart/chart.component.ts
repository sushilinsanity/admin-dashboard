import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() color: string;
  @Input() infoShow: string;

  lineColor: string;

  chartOptions: {};
  Highcharts = Highcharts;

  data = {
    data1: [
      369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
      20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
      26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
      24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
      21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
      10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
      5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
    ],
    data2: [
      26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
      24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
    ]
  };

  constructor() { }

  ngOnInit(): void {
    if (this.color === '#F64E60') {
      this.lineColor = '#D13547';
    } else {
      this.lineColor = this.color;
    }

    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: this.lineColor === '#D13547' ? '#F64E60' : null,
        border: 0,
        borderWidth: 0,
        height: 220,
        margin: [0, 0, 0, 0],
        spacing: [0, 0, 0, 0],
      },
      colors: [this.color],
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      legend: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        minPadding: 0,
        maxPadding: 0,
        minorGridLineWidth: 0,
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        minPadding: 0,
        maxPadding: 0,
        minorGridLineWidth: 0,
        gridLineWidth: 0,
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Watched <b>{point.y:,.0f}</b><br/>anime <b>episodes</b> in month of {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: null,
          lineWidth: 3,
          lineColor: this.lineColor,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        data: this.lineColor !== '#56D6D0' ? this.data.data1 : this.data.data2
      }]
    };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
    
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 400);
  }
}
