import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss'],
})
export class ChargesComponent implements OnInit {
  chargesRanges: string[];
  selectedChargesRange: string;
  options: any;
  @Input() stream: {
    loading: boolean,
    data: any
  };
  @Output() rangeChanged = new EventEmitter<any>();
  constructor() {
    this.chargesRanges = ['Today', 'Yesterday'];
    this.selectedChargesRange = this.chargesRanges[0];
  }

  ngOnInit() {
    // Demo
    // TODO Need to update data when ranged changed
    this.initChart();
  }

  onRangeChanged() {
    this.rangeChanged.emit(this.selectedChargesRange);
  }
  private initChart() {
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} <br/>{c} PLN ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '53%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '24',
                fontWeight: 'normal'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 335,
              name: 'Food',
              itemStyle: {
                color: '#9c27b0'
              }
            },
            {
              value: 310,
              name: 'House',
              itemStyle: {
                color: '#68d535'
              }
            },
            {
              value: 234,
              name: 'Car',
              itemStyle: {
                color: '#ff006d'
              }
            },
            {
              value: 135,
              name: 'Bills',
              itemStyle: {
                color: '#5ec0c5'
              }
            }
          ]
        }
      ]
    };
  }
}
