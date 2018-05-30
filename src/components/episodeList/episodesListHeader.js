import React from 'react';
import PropTypes from 'prop-types';

const EpisodesListHeader = ({ children }) => (
  <div className="episodes-list__header">
    { React.Children.map(children, child => React.cloneElement(child, { className: 'episodes-list__cell' }))}
  </div>
);

EpisodesListHeader.propTypes = {
  children: PropTypes.array.isRequired,
};

export default EpisodesListHeader;
