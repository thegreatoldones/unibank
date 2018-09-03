import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HistoryItem } from './history-item.model';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyRanges: string[];
  selectedHistoryRange: string;
  @Input() stream: {
    loading: boolean,
    data: HistoryItem[]
  };
  @Output() rangeChanged = new EventEmitter<any>();
  constructor() {
    this.historyRanges = ['Today', 'Yesterday'];
    this.selectedHistoryRange = this.historyRanges[0];
  }
  ngOnInit() {}
  onRangeChanged() {
    this.rangeChanged.emit(this.selectedHistoryRange);
  }
}
