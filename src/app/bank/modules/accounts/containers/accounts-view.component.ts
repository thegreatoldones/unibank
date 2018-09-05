import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AccountsActions from '../../accounts/actions/accounts.actions';
import * as fromBank from '../../../redusers/bank.reduser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Accounts view</h1>
  `
})
export class AccountsViewComponent implements OnInit {
  accounts$: Observable<any>;
  offers$: Observable<any>;
  constructor(private store: Store<fromBank.State>) {
    this.accounts$ = store.pipe(select(fromBank.getAccountsState));
    this.offers$ = store.pipe(select(fromBank.getOffersState));
  }
  ngOnInit() {
    this.store.dispatch(new AccountsActions.AccountsLoad());
    this.store.dispatch(new AccountsActions.OffersLoad());
    console.log('Accounts view init');
  }
}
