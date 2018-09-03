import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  options: any;
  @Input() stream: {
    loading: boolean,
    data: any
  };
  constructor() {}

  ngOnInit() {
    this.initChart();
  }
  private initChart() {
    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      calculable: true,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: 'rgba(0,0,0,0.54)'
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.06)'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: 'rgba(0,0,0,0.54)'
        }
      },
      series: [
        {
          name: 'Balance',
          type: 'line',
          smooth: true,
          data: [6120, 7000, 7500, 5300, 6800, 7900, 7950],
          lineStyle: {
            color: '#9c27b0',
            shadowColor: 'rgba(156,39,176, 0.3)',
            shadowBlur: 15,
            shadowOffsetY: 5,
            width: 3
          },
          symbolSize: 8,
          itemStyle: {
            color: null,
            borderColor: '#9c27b0',
            borderWidth: 2
          }
        }
      ]
    };
  }
}
