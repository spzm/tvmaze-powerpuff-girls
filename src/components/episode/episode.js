import React from 'react';
import PropTypes from 'prop-types';

import Cover from '../cover';

import './episode.css';

const Episode = ({
  name,
  summary,
  showName,
  mediumCover,
  largeCover,
}) => (
  <div className="episode">
    <h2 className="episode__title">{showName}: {name}</h2>
    <div className="episode__details">
      <Cover alt="Episode cover" className="episode__cover" meidumCover={mediumCover} largeCover={largeCover} />
      { summary
        ? <div className="episode__description" dangerouslySetInnerHTML={{ __html: summary }} />
        : <div className="episode__description">There is no description</div>
      }
    </div>
  </div>
);

Episode.propTypes = {
  name: PropTypes.string,
  summary: PropTypes.string,
  showName: PropTypes.string,
  mediumCover: PropTypes.string,
  largeCover: PropTypes.string,
};

export default Episode;
