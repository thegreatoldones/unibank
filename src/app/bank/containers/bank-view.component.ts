import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  template: `
    <div class="bank-root" fxFlex="100">
      <div class="bank-root_header">
        <app-header></app-header>
      </div>
      <div class="bank-root_content">
        <mat-sidenav-container>
          <mat-sidenav #sideNav mode="side" opened="true" class="bank-sidenav">
            <mat-list>
              <mat-nav-list>
                <mat-list-item
                  *ngFor="let item of sidebar"
                  routerLinkActive="active"
                  routerLink="{{item.link}}">
                  <div class="sidenav-item-container">
                    <mat-icon aria-label="Dashboard">{{item.icon}}</mat-icon>
                    <a>{{item.label}}</a>
                  </div>
                </mat-list-item>
              </mat-nav-list>
            </mat-list>
          </mat-sidenav>
          <mat-sidenav-content>
            <div class="bank-container">
              <router-outlet></router-outlet>
            </div>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </div>
    </div>`,
  styleUrls: ['../styles/bank-view.styles.scss']
})
export class BankViewComponent implements OnInit {
  sidebar;
  constructor() {
    this.buildSidebar({});
  }
  private buildSidebar(user) {
    // Permissions check example
    // this.sidebar = _.filter([
    //   {
    //     label: 'Dashboard',
    //     icon: 'home',
    //     link: '/bank/dashboard',
    //     permission: 'bank_dashboard'
    //   },
    //   {
    //     label: 'Accounts',
    //     icon: 'account_balance_wallet',
    //     link: '/bank/accounts',
    //     permission: 'bank_accounts'
    //   },
    //   {
    //     label: 'Savings',
    //     icon: 'attach_money',
    //     link: '#',
    //     permission: 'bank_savings'
    //   },
    //   {
    //     label: 'Cards',
    //     icon: 'credit_card',
    //     link: '#',
    //     permission: 'bank_cards'
    //   },
    //   {
    //     label: 'Loans',
    //     icon: 'receipt',
    //     link: '#',
    //     permission: 'bank_loans'
    //   },
    //   {
    //     label: 'Investments',
    //     icon: 'show_chart',
    //     link: '#',
    //     permission: 'bank_investments'
    //   },
    //   {
    //     label: 'Contracts',
    //     icon: 'insert_drive_file',
    //     link: '#',
    //     permission: 'bank_contracts'
    //   }
    // ], function (item) {
    //   return user.permissions.indexOf(item.permission) !== -1;
    // });
    this.sidebar = [
      {
        label: 'Dashboard',
        icon: 'home',
        link: '/bank',
        permission: 'bank_dashboard'
      },
      {
        label: 'Accounts',
        icon: 'account_balance_wallet',
        link: '/bank/accounts',
        permission: 'bank_accounts'
      },
      {
        label: 'Savings',
        icon: 'attach_money',
        link: '/bank/savings',
        permission: 'bank_savings'
      },
      {
        label: 'Cards',
        icon: 'credit_card',
        link: '/bank/cards',
        permission: 'bank_cards'
      },
      {
        label: 'Loans',
        icon: 'receipt',
        link: '/bank/loans',
        permission: 'bank_loans'
      },
      {
        label: 'Investments',
        icon: 'show_chart',
        link: '/bank/investments',
        permission: 'bank_investments'
      },
      {
        label: 'Contracts',
        icon: 'insert_drive_file',
        link: '/bank/contracts',
        permission: 'bank_contracts'
      }
    ];
  }
  ngOnInit() {
    console.log('Bank view init');
  }
}
