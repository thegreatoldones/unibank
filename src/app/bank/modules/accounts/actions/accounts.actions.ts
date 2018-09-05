import { Action } from '@ngrx/store';

export enum AccountsActionTypes {
  AccountsLoad = '[Accounts] Load',
  AccountsLoadSuccess = '[Accounts] Load Success',
  OffersLoad = '[Offers] Load',
  OffersLoadSuccess = '[Offers] Load Success'
}

export class AccountsLoad implements Action {
  readonly type = AccountsActionTypes.AccountsLoad;
}
export class AccountsLoadSuccess implements Action {
  readonly type = AccountsActionTypes.AccountsLoadSuccess;
  constructor(public payload: any) {}
}
export class OffersLoad implements Action {
  readonly type = AccountsActionTypes.OffersLoad;
}
export class OffersLoadSuccess implements Action {
  readonly type = AccountsActionTypes.OffersLoadSuccess;
  constructor(public payload: any) {}
}

export type AccountsActionsUnion =
  | AccountsLoad
  | AccountsLoadSuccess
  | OffersLoad
  | OffersLoadSuccess;
