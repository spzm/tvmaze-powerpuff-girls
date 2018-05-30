import { combineReducers } from 'redux';

import showsContants from '../domains/shows/constants';
import episodesConstants from '../domains/episodes/constants';
import shows from '../domains/shows/reducers';
import episodes from '../domains/episodes/reducers';

const rootReducer = combineReducers({
  [showsContants.domainName]: shows,
  [episodesConstants.domainName]: episodes,
});

export default rootReducer;
