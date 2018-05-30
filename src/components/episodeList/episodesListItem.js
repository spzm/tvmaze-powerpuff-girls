import React from 'react';
import PropTypes from 'prop-types';

const EpisodesListItem = ({ children }) => (
  <div className="episodes-list__item">
    { React.Children.map(children, child => React.cloneElement(child, { className: 'episodes-list__cell' }))}
  </div>
);

EpisodesListItem.propTypes = {
  children: PropTypes.array.isRequired,
};

export default EpisodesListItem;
