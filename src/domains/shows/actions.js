import { createAction } from 'redux-actions';
import HttpService from '../../services/http';
import { showsEndpoint } from '../../config/endpoints';

import {
  domainName,
  GET_SHOW_SUCCESS,
  GET_SHOW_FAILED,
} from './constants';

const getShowSuccess = createAction(GET_SHOW_SUCCESS);
const getShowFailed = createAction(GET_SHOW_FAILED);

const isShowFetched = (state, showId) => {
  const currentShow = state && state[domainName];

  return currentShow && currentShow.id === showId;
};

export function getShow(showId) {
  return (dispatch, getState) => {
    // TODO: use parseInt
    if (isShowFetched(getState(), +showId)) return;

    HttpService.get(`${showsEndpoint}/${showId}`)
      .then(data => dispatch(getShowSuccess(data)))
      .catch(error => dispatch(getShowFailed(error)));
  };
}

export default {
  getShow,
};
