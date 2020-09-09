import { Effect } from '@redux-saga/types';

import {
  REDUCER_FETCH_MAIN_DATA,
  REDUCER_CLEAR_MAIN_DATA,
} from '~/redux/main/Constants';

const INITIAL_STATE = {
  loading: false,
  message: undefined,
};

export default (state = INITIAL_STATE, action: Effect) => {
  switch (action.type) {
    case REDUCER_FETCH_MAIN_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case REDUCER_CLEAR_MAIN_DATA: {
      return {
        ...state,
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
};
