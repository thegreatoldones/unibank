import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material';

import { AccountsService } from './components/accounts/accounts.service';

import { AccountsViewComponent } from './containers/accounts-view.component';
import { AccountComponent } from './components/accounts/account/account.component';
import { AccountsComponent } from './components/accounts/accounts.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    AccountsViewComponent,
    AccountComponent,
    AccountsComponent,
  ],
  providers: [
    AccountsService
  ]
})
export class AccountsModule { }
