import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MoneyTransferComponent } from '../money-transfer/money-transfer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MatDialog]
})
export class HeaderComponent implements OnInit {
  currentUser;
  constructor(public modal: MatDialog) {
    this.currentUser = 'Tom';
  }
  openModal(): void {
    this.modal.open(MoneyTransferComponent, {
      width: '80vw',
      height: '80vh',
      data: {test: '43434'}
    });
  }

  ngOnInit() {
  }

}

