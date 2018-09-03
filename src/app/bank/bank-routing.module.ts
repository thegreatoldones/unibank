import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './modules/dashboard/containers/dashboard-view.component';
import { BankViewComponent } from './containers/bank-view.component';
import { AccountsViewComponent } from './modules/accounts/accounts-view.component';

export const routes: Routes = [
  {
    path: '',
    component: BankViewComponent,
    children: [
      {
        path: '',
        component: DashboardViewComponent
      },
      {
        path: 'accounts',
        component: AccountsViewComponent
      },
      {
        path: '**',
        component: DashboardViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule {}
