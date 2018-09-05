import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromBank from '../../../redusers/bank.reduser';
import * as DashboardActions from '../actions/dashboard.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="dashboard" fxFlex="100" fxLayout="row">
      <div class="dashboard_content" fxFlex="100" fxLayout="row wrap">
        <div class="dashboard-header" fxFlex="100" fxLayout="row">
          <div class="dashboard-header_title-container" fxFlex="50">
            <h3 class="mat-subheading-2">Dashboard</h3>
          </div>
          <div class="dashboard-header_action-container" fxFlex="50">
            <button
              mat-raised-button
              color="primary"
              (click)="onAddModules()">
              <mat-icon aria-label="Add modules">add</mat-icon>
              Add modules
            </button>
          </div>
        </div>
        <div class="dashboard-modules" fxFlex="100" fxLayout="row wrap">
          <div *ngFor="let module of modules; trackBy: trackByModule" fxFlex.sm="100" fxFlex.xs="100" fxFlex="{{module.flex}}">
            <div [ngSwitch]="module.type" fxFlex="100">
              <div *ngSwitchCase="'Summary'" class="dashboard-module-container" fxFlex="100">
                <app-summary [stream]="summary$ | async"></app-summary>
              </div>
              <div *ngSwitchCase="'Cards'" class="dashboard-module-container" fxFlex="100">
                <app-cards [stream]="cards$ | async"></app-cards>
              </div>
              <div *ngSwitchCase="'Messages'" class="dashboard-module-container" fxFlex="100">
                <app-messages [stream]="messages$ | async"></app-messages>
              </div>
              <div *ngSwitchCase="'History'" class="dashboard-module-container" fxFlex="100">
                <app-history [stream]="history$ | async" (rangeChanged)="updateHistory($event)"></app-history>
              </div>
              <div *ngSwitchCase="'Charges'" class="dashboard-module-container" fxFlex="100">
                <app-charges [stream]="charges$ | async" (rangeChanged)="updateCharges($event)"></app-charges>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/dashboard-view.styles.scss']
})
export class DashboardViewComponent implements OnInit {
  summary$: Observable<any>;
  history$: Observable<any>;
  messages$: Observable<any>;
  charges$: Observable<any>;
  cards$: Observable<any>;
  modules: any;
  constructor(private store: Store<fromBank.State>) {
    this.modules = [
      {
        id: 1,
        type: 'Summary',
        flex: 50
      },
      {
        id: 2,
        type: 'Cards',
        flex: 50
      },
      {
        id: 4,
        type: 'History',
        flex: 30
      },
      {
        id: 3,
        type: 'Charges',
        flex: 30
      },
      {
        id: 5,
        type: 'Messages',
        flex: 40
      }
    ];
    this.summary$ = store.pipe(select(fromBank.getSummaryState));
    this.history$ = store.pipe(select(fromBank.getHistoryState));
    this.messages$ = store.pipe(select(fromBank.getMessagesState));
    this.charges$ = store.pipe(select(fromBank.getChargesState));
    this.cards$ = store.pipe(select(fromBank.getCardsState));
  }
  ngOnInit() {
    console.log('Dashboard view init');
    // TODO Need to navigate to dashboard via side effects
    this.store.dispatch(new DashboardActions.Load());
  }
  trackByModule(index: number, module: any): number {
    return module.id;
  }
  onAddModules() {}

  updateHistory(data) {
    this.store.dispatch(new DashboardActions.HistoryLoad(data));
  }
  updateCharges(data) {
    this.store.dispatch(new DashboardActions.ChargesLoad(data));
  }
}
