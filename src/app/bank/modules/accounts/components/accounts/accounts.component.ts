import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  @Input() stream: {
    loading: boolean,
    data: object[]
  };
  constructor() { }

  ngOnInit() {
  }

}
