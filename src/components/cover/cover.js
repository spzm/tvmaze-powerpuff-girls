import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { SIZES_TYPES, below } from '../../utils/breakpoints';

import './cover.css';

const EpisodeCover = ({
  alt, className, coverName, mediumCover, largeCover,
}) => {
  const classes = classnames('cover', className);

  return (
    <picture className={classes}>
      <source srcSet={mediumCover} media={below(SIZES_TYPES.MEDIUM)} />
      <img alt={coverName || alt} src={largeCover} />
    </picture>
  );
};

EpisodeCover.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  coverName: PropTypes.string,
  mediumCover: PropTypes.string,
  largeCover: PropTypes.string,
};

export default EpisodeCover;
