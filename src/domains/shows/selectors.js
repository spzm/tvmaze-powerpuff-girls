import { createSelector } from 'reselect';

import { domainName } from './constants';

export const getName = createSelector(state => state[domainName].name, _ => _);

export const getDescription = createSelector(
  state => state[domainName].summary,
  _ => _,
);

export const getCoverLinks = createSelector(
  state => state[domainName].image,
  items => ({
    large: items && items.original,
    medium: items && items.medium,
  }),
);
