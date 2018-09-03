import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnChanges {
  selectedCard: Card;
  @Input() stream: {
    loading: boolean,
    data: Card[]
  };

  constructor() {}
  // TODO Need to improve
  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.stream;
    if (this.stream.data && data.previousValue !== data.currentValue) {
      this.selectedCard = this.stream.data[0];
    }
  }
  ngOnInit() {}
  onChangePin() {}
  onWithholdCard() {}
}
