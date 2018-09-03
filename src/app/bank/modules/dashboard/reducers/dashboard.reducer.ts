import { DashboardActionsUnion, DashboardActionTypes } from '../actions/dasboard.actions';

export interface State {
  summary: any;
  history: any;
  messages: any;
  charges: any;
  cards: any;
}

export const initialState: State = {
  summary: {
    loading: false,
    data: null
  },
  history: {
    loading: false,
    data: null
  },
  messages: {
    loading: false,
    data: null
  },
  charges: {
    loading: false,
    data: null
  },
  cards: {
    loading: false,
    data: null
  }
};

export function reducer(state = initialState, action: DashboardActionsUnion): State {
  switch (action.type) {
    case DashboardActionTypes.Load: {
      return state;
    }
    case DashboardActionTypes.MessagesLoad: {
      return {
        ...state,
        messages: {
          loading: true
        }
      };
    }
    case DashboardActionTypes.SummaryLoad: {
      return {
        ...state,
        summary: {
          loading: true
        }
      };
    }
    case DashboardActionTypes.CardsLoad: {
      return {
        ...state,
        cards: {
          loading: true
        }
      };
    }
    case DashboardActionTypes.HistoryLoad: {
      return {
        ...state,
        history: {
          loading: true
        }
      };
    }
    case DashboardActionTypes.ChargesLoad:
      return {
        ...state,
        charges: {
          loading: true
        }
      };
    case DashboardActionTypes.HistoryLoadSuccess: {
      return {
        ...state,
        history: {
          loading: false,
          data: action.payload.map(item => item)
        }
      };
    }
    case DashboardActionTypes.MessagesLoadSuccess: {
      return {
        ...state,
        messages: {
          loading: false,
          data: action.payload.map(item => item)
        }
      };
    }
    case DashboardActionTypes.ChargesLoadSuccess: {
      return {
        ...state,
        charges: {
          loading: false,
          data: action.payload.map(item => item)
        }
      };
    }
    case DashboardActionTypes.CardsLoadSuccess: {
      return {
        ...state,
        cards: {
          loading: false,
          data: action.payload.map(item => item)
        }
      };
    }
    case DashboardActionTypes.SummaryLoadSuccess: {
      return {
        ...state,
        summary: {
          loading: false,
          data: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
}
