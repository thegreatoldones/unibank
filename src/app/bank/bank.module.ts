import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BankRoutingModule } from './bank-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AccountsModule } from './modules/accounts/accounts.module';

import { BankViewComponent } from './containers/bank-view.component';
import { HeaderComponent} from './components/header/header.component';
import { reducers } from './redusers/bank.reduser';
import { DashboardEffects } from './modules/dashboard/effects/dashboard.effects';
import { AccountsEffects } from './modules/accounts/effects/accounts.effects';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BankRoutingModule,
    FormsModule,
    DashboardModule,
    AccountsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bank', reducers),
    EffectsModule.forFeature([DashboardEffects, AccountsEffects]),
  ],
  declarations: [
    BankViewComponent,
    HeaderComponent,
    MoneyTransferComponent
  ],
  entryComponents: [MoneyTransferComponent]
})
export class BankModule {}
