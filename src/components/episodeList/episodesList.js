import React from 'react';
import PropTypes from 'prop-types';

import './episodesList.css';

const EpisodesList = ({ children }) => (
  <div className="episodes-list">
    { children }
  </div>
);

EpisodesList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default EpisodesList;
