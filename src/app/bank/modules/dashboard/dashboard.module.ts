import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

import { MaterialModule } from '../../../material';

import { ChargesService } from './components/charges/charges.service';
import { CardsService } from './components/cards/cards.service';
import { SummaryService } from './components/summary/summary.service';
import { HistoryService } from './components/history/history.service';
import { MessagesService } from './components/messages/messages.service';

import { HistoryComponent } from './components/history/history.component';
import { ChargesComponent } from './components/charges/charges.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashboardViewComponent } from './containers/dashboard-view.component';


@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, NgxEchartsModule],
  declarations: [
    DashboardViewComponent,
    HistoryComponent,
    CardsComponent,
    ChargesComponent,
    MessagesComponent,
    SummaryComponent
  ],
  providers: [
    HistoryService,
    MessagesService,
    ChargesService,
    CardsService,
    SummaryService
  ]
})
export class DashboardModule {}
