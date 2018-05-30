import { handleActions } from 'redux-actions';

import {
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAILED,
  GET_EPISODES_FETCHED,
  GET_EPISODE_DETAILS_SUCCESS,
  GET_EPISODE_DETAILS_FAILED,
} from './constants';

const initialState = {
  episodes: null,
  isEpisodesFetching: false,
  currentEpisode: null,
};

function getEpisodesFetched(state) {
  return {
    ...state,
    isEpisodesFetching: true,
  };
}

function getEpisodesSuccess(state, { payload }) {
  return {
    ...state,
    episodes: payload,
    isEpisodesFetching: false,
  };
}

function getEpisodesFailed(state, { payload }) {
  return {
    ...state,
    error: payload,
    isEpisodesFetching: false,
  };
}

function getEpisodeDetailsSuccess(state, { payload }) {
  return {
    ...state,
    currentEpisode: payload,
  };
}

function getEpisodeDetailsFailed(state, { payload }) {
  return {
    ...state,
    error: payload,
  };
}

export default handleActions({
  [GET_EPISODES_SUCCESS]: getEpisodesSuccess,
  [GET_EPISODES_FAILED]: getEpisodesFailed,
  [GET_EPISODES_FETCHED]: getEpisodesFetched,
  [GET_EPISODE_DETAILS_SUCCESS]: getEpisodeDetailsSuccess,
  [GET_EPISODE_DETAILS_FAILED]: getEpisodeDetailsFailed,
}, initialState);
