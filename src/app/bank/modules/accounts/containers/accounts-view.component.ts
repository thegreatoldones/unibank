import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AccountsActions from '../../accounts/actions/accounts.actions';
import * as fromBank from '../../../redusers/bank.reduser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-module',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="accounts" fxFlex="100" fxLayout="row">
      <div class="accounts_content" fxFlex="100" fxLayout="row wrap">
        <div class="accounts-header" fxFlex="100" fxLayout="row">
          <div class="accounts-header_title-container" fxFlex="50">
            <h3 class="mat-subheading-2">Accounts</h3>
          </div>
          <div class="accounts-header_action-container" fxFlex="50">
          </div>
        </div>
        <div class="accounts-modules" fxFlex="100" fxLayout="column">
          <app-accounts [stream]="accounts$ | async"></app-accounts>
        </div>
      </div>
    </div>
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
