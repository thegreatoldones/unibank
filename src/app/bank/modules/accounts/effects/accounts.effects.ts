import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { flatMap, map, switchMap } from 'rxjs/operators';

import {
  AccountsActionTypes,
  AccountsLoad,
  AccountsLoadSuccess,
  OffersLoad,
  OffersLoadSuccess
} from '../actions/accounts.actions';

// TODO Add effects for load errors
@Injectable()
export class AccountsEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}
  @Effect()
  accountsLoad$ = this.actions$.pipe(
    ofType<AccountsLoad>(AccountsActionTypes.AccountsLoad),
    map(() => new AccountsLoadSuccess([]))
  );
  @Effect()
  offersLoad$ = this.actions$.pipe(
    ofType<OffersLoad>(AccountsActionTypes.OffersLoad),
    map(() => new OffersLoadSuccess([]))
  );
}
