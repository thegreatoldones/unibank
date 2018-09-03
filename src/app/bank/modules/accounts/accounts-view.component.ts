import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Accounts view</h1>
  `
})
export class AccountsViewComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('Accounts view init');
  }
}
