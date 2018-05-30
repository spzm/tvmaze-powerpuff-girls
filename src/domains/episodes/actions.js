import { createAction } from 'redux-actions';
import HttpService from '../../services/http';
import { showsEndpoint } from '../../config/endpoints';

import {
  domainName,
  GET_EPISODES_SUCCESS,
  GET_EPISODES_FAILED,
  GET_EPISODE_DETAILS_SUCCESS,
  GET_EPISODE_DETAILS_FAILED,
  GET_EPISODES_FETCHED,
} from './constants';

const getEpisodesSuccess = createAction(GET_EPISODES_SUCCESS);
const getEpisodesFailed = createAction(GET_EPISODES_FAILED);
const getEpisodesFetched = createAction(GET_EPISODES_FETCHED);

/**
 * Get all episdoes. There is another way how to get them:
 * - first call to seasons enpoint
 * - then retrieve it season by season
 *
 * This possible case could be better semantically
 * but it will require too match calls. So, in
 * some component inside it will be filtered by season.
 *
 * @param {Number} showId id to fetch all show episodes
 */
export function getEpisodes(showId) {
  return (dispatch) => {
    dispatch(getEpisodesFetched());
    HttpService.get(`${showsEndpoint}/${showId}/episodes`)
      .then(data => dispatch(getEpisodesSuccess(data)))
      .catch(error => dispatch(getEpisodesFailed(error)));
  };
}

const getEpisodeDetailsSuccess = createAction(GET_EPISODE_DETAILS_SUCCESS);
const getEpisodeDetailsFailed = createAction(GET_EPISODE_DETAILS_FAILED);

/**
 * This method try to get cached episod value if it's already
 * exist in episodes.
 *
 * TODO: here is a possible issue when episodes were initialized
 * by another show.
 *
 * @param {Object} state current redux state
 * @param {Number} season season number
 * @param {Number} number episode number in season
 */
const getEpisodeFromStore = (state, season, number) => {
  const episodesDomain = state && state[domainName];
  const episodes = episodesDomain && episodesDomain.episodes;

  if (!Array.isArray(episodes)) return null;

  return episodes.find(episode => episode.season === season && episode.number === number);
};

export function getEpisodeBySeason(showId, season, number) {
  return (dispatch, getState) => {
    const state = getState();

    // TODO:
    // Make proper helper to parseInt and handle excpetion
    const episode = getEpisodeFromStore(state, +season, +number);

    if (episode) {
      dispatch(getEpisodeDetailsSuccess(episode));
      return;
    }

    HttpService.get(`${showsEndpoint}/${showId}/episodebynumber?season=${season}&number=${number}`)
      .then(data => dispatch(getEpisodeDetailsSuccess(data)))
      .catch(error => dispatch(getEpisodeDetailsFailed(error)));
  };
}
