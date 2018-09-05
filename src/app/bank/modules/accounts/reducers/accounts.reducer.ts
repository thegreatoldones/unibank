import {AccountsActionsUnion, AccountsActionTypes} from '../actions/accounts.actions';

export interface State {
  accounts: any;
  offers: any;
}

export const initialState: State = {
  accounts: {
    loading: false,
    data: null
  },
  offers: {
    loading: false,
    data: null
  }
};

export function reducer(state = initialState, action: AccountsActionsUnion): State {
  switch (action.type) {
    case AccountsActionTypes.AccountsLoad: {
      return {
        ...state,
        accounts: {
          loading: true
        }
      };
    }
    case AccountsActionTypes.OffersLoad: {
      return {
        ...state,
        offers: {
          loading: true
        }
      };
    }
    case AccountsActionTypes.AccountsLoadSuccess: {
      return {
        ...state,
        accounts: {
          loading: false,
          data: [{label: 'Account label'}, {label: 'Account 2 label'}, {label: 'Account 3 label'}]
          // data: action.payload.map(item => item)
        }
      };
    }
    case AccountsActionTypes.OffersLoadSuccess: {
      return {
        ...state,
        offers: {
          loading: false,
          data: [{label: 'Offer label'}, {label: 'Offer 2 label'}, {label: 'Offer 3 label'}, {label: 'Offer 4 label'}]
          // data: action.payload.map(item => item)
        }
      };
    }
    default: {
      return state;
    }
  }
}
