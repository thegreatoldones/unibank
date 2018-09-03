import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth-guard.service';

export const routes: Routes = [
  {
    path: '', redirectTo: '/bank', pathMatch: 'full'
  },
  {
    path: 'bank',
    loadChildren: './bank/bank.module#BankModule',
    // canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
