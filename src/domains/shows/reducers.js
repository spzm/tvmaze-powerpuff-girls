import { handleActions } from 'redux-actions';

import {
  GET_SHOW_SUCCESS,
  GET_SHOW_FAILED,
} from './constants';


const initialState = {
  name: null,
  description: null,
  error: null,
};

function getShowSuccess(state, { payload }) {
  return {
    ...state,
    ...payload,
  };
}

function getShowFailed(state, { payload }) {
  return {
    ...state,
    error: payload,
  };
}

export default handleActions({
  [GET_SHOW_SUCCESS]: getShowSuccess,
  [GET_SHOW_FAILED]: getShowFailed,
}, initialState);
