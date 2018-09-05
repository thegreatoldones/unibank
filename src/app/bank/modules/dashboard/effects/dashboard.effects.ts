import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { flatMap, map, switchMap } from 'rxjs/operators';

import {
  Load,
  SummaryLoad,
  SummaryLoadSuccess,
  DashboardActionTypes,
  HistoryLoadSuccess,
  HistoryLoad,
  MessagesLoad,
  MessagesLoadSuccess,
  ChargesLoad,
  ChargesLoadSuccess,
  CardsLoad,
  CardsLoadSuccess
} from '../actions/dashboard.actions';
import { HistoryService } from '../components/history/history.service';
import { MessagesService } from '../components/messages/messages.service';
import { ChargesService } from '../components/charges/charges.service';
import { CardsService } from '../components/cards/cards.service';
import { SummaryService } from '../components/summary/summary.service';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private historyService: HistoryService,
    private messagesService: MessagesService,
    private chargesService: ChargesService,
    private cardsService: CardsService,
    private summaryService: SummaryService
  ) {}
  @Effect()
  load$ = this.actions$.pipe(
    ofType<Load>(DashboardActionTypes.Load),
    flatMap(() => [
      new SummaryLoad(),
      new HistoryLoad('Yesterday'),
      new MessagesLoad(),
      new ChargesLoad('Yesterday'),
      new CardsLoad()
    ])
  );
  @Effect()
  summaryLoad$ = this.actions$.pipe(
    ofType<SummaryLoad>(DashboardActionTypes.SummaryLoad),
    switchMap(() =>
      this.summaryService
        .getSummary()
        .pipe(map(summary => new SummaryLoadSuccess(summary)))
    )
  );
  @Effect()
  historyLoad$ = this.actions$.pipe(
    ofType<HistoryLoad>(DashboardActionTypes.HistoryLoad),
    map(action => action.payload),
    switchMap(range =>
      this.historyService
        .getHistory(range, '5')
        .pipe(map(history => new HistoryLoadSuccess(history)))
    )
  );
  @Effect()
  chargesLoad$ = this.actions$.pipe(
    ofType<ChargesLoad>(DashboardActionTypes.ChargesLoad),
    map(action => action.payload),
    switchMap(range =>
      this.chargesService
        .getCharges(range)
        .pipe(map(charges => new ChargesLoadSuccess(charges)))
    )
  );
  @Effect()
  cardsLoad$ = this.actions$.pipe(
    ofType<CardsLoad>(DashboardActionTypes.CardsLoad),
    switchMap(() =>
      this.cardsService
        .getCards()
        .pipe(map(cards => new CardsLoadSuccess(cards)))
    )
  );
  @Effect()
  messagesLoad$ = this.actions$.pipe(
    ofType<MessagesLoad>(DashboardActionTypes.MessagesLoad),
    switchMap(() =>
      this.messagesService
        .getLatestMessages()
        .pipe(map(messages => new MessagesLoadSuccess(messages)))
    )
  );
}
