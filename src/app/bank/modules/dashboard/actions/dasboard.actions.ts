import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
  Load = '[Dashboard] Load',
  HistoryLoad = '[History] Load',
  HistoryLoadSuccess = '[History] Load Success',
  MessagesLoad = '[Messages] Load',
  MessagesLoadSuccess = '[Messages] Load Success',
  ChargesLoad = '[Charges] Load',
  ChargesLoadSuccess = '[Charges] Load Success',
  CardsLoad = '[Cards] Load',
  CardsLoadSuccess = '[Cards] Load Success',
  SummaryLoad = '[Summary] Load',
  SummaryLoadSuccess = '[Summary] Load Success',
}

export class Load implements Action {
  readonly type = DashboardActionTypes.Load;
}
export class SummaryLoad implements Action {
  readonly type = DashboardActionTypes.SummaryLoad;
}
export class SummaryLoadSuccess implements Action {
  readonly type = DashboardActionTypes.SummaryLoadSuccess;
  constructor(public payload: any) {}
}
export class HistoryLoad implements Action {
  readonly type = DashboardActionTypes.HistoryLoad;
  constructor(public payload: any) {}
}
export class HistoryLoadSuccess implements Action {
  readonly type = DashboardActionTypes.HistoryLoadSuccess;
  constructor(public payload: object[]) {}
}
export class MessagesLoad implements Action {
  readonly type = DashboardActionTypes.MessagesLoad;
}
export class MessagesLoadSuccess implements Action {
  readonly type = DashboardActionTypes.MessagesLoadSuccess;
  constructor(public payload: object[]) {}
}
export class ChargesLoad implements Action {
  readonly type = DashboardActionTypes.ChargesLoad;
  constructor(public payload: any) {}
}
export class ChargesLoadSuccess implements Action {
  readonly type = DashboardActionTypes.ChargesLoadSuccess;
  constructor(public payload: object[]) {}
}
export class CardsLoad implements Action {
  readonly type = DashboardActionTypes.CardsLoad;
}
export class CardsLoadSuccess implements Action {
  readonly type = DashboardActionTypes.CardsLoadSuccess;
  constructor(public payload: object[]) {}
}

export type DashboardActionsUnion =
  | Load
  | SummaryLoad
  | SummaryLoadSuccess
  | HistoryLoad
  | HistoryLoadSuccess
  | MessagesLoad
  | MessagesLoadSuccess
  | ChargesLoad
  | ChargesLoadSuccess
  | CardsLoad
  | CardsLoadSuccess;
