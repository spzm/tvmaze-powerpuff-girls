import { createSelector } from 'reselect';

import { domainName } from './constants';

export const getEpisodesList = createSelector(state => state[domainName].episodes, _ => _);

export const getCurrentEpisode = createSelector(
  state => state[domainName].currentEpisode,
  (episode) => {
    if (!episode) return null;

    return {
      name: episode.name,
      summary: episode.summary,
      airdate: episode.airdate,
    };
  },
);

export const getError = createSelector(
  state => state[domainName].error,
  error => error && error.message,
);

export const getLoading = createSelector(
  state => state[domainName].isEpisodesFetching,
  _ => _,
);

export const getCoverLinks = createSelector(
  state => state[domainName].currentEpisode,
  episode => ({
    large: episode && episode.image && episode.image.original,
    medium: episode && episode.image && episode.image.medium,
  }),
);
