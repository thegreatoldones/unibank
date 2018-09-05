import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material';

import { AccountsViewComponent } from './containers/accounts-view.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    AccountsViewComponent,
  ]
})
export class AccountsModule { }
