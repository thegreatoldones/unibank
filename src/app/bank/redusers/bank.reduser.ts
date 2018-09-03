import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromDashboard from '../modules/dashboard/reducers/dashboard.reducer';
import * as fromRoot from '../../reducers/index';

export interface BankState {
  dashboard: fromDashboard.State;
}
export interface State extends fromRoot.State {
  bank: BankState;
}
export const reducers: ActionReducerMap<BankState> = {
  dashboard: fromDashboard.reducer
};

export const getBankState = createFeatureSelector<State, BankState>('bank');

export const getHistoryState = createSelector(
  getBankState,
  (state: BankState) => state.dashboard.history
);
export const getMessagesState = createSelector(
  getBankState,
  (state: BankState) => state.dashboard.messages
);
export const getChargesState = createSelector(
  getBankState,
  (state: BankState) => state.dashboard.charges
);
export const getCardsState = createSelector(
  getBankState,
  (state: BankState) => state.dashboard.cards
);
export const getSummaryState = createSelector(
  getBankState,
  (state: BankState) => state.dashboard.summary
);
