import { Effect } from '@redux-saga/types';

import {
  REDUCER_FETCH_AUTH_DATA,
  REDUCER_CLEAR_AUTH_DATA,
} from '~/redux/auth/Constants';

const INITIAL_STATE = {
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, action: Effect) => {
  switch (action.type) {
    case REDUCER_FETCH_AUTH_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case REDUCER_CLEAR_AUTH_DATA: {
      return {
        ...state,
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};
