import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { EpisodesList, EpisodesListItem, EpisodesListHeader } from '../../components/episodeList';

const Season = ({ number, episodes, showId }) => {
  function formatDate(date) {
    if (!Intl) return `${date}`;
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }
  function renderSeasonEpisode(id, episodeNumber, episodeLink, date, name) {
    return (
      <EpisodesListItem key={`item-${id}`}>
        <div>{episodeNumber}</div>
        <div>{formatDate(new Date(date))}</div>
        <div><Link to={episodeLink} >{name}</Link></div>
      </EpisodesListItem>
    );
  }

  const generateEpisodeLink = (season, episodeNumber) => `/show/${showId}/episodes/${season}/${episodeNumber}`;

  return (
    <div>
      <h2>Season {number}</h2>
      <EpisodesList>
        <EpisodesListHeader>
          <div>Number</div>
          <div>Airdate</div>
          <div>Name</div>
        </EpisodesListHeader>
        {episodes.map(item => renderSeasonEpisode(
            item.id,
            item.number,
            generateEpisodeLink(item.season, item.number),
            item.airdate,
            item.name,
          ))}
      </EpisodesList>
    </div>
  );
};

Season.propTypes = {
  number: PropTypes.string.isRequired,
  episodes: PropTypes.array.isRequired,
  showId: PropTypes.string.isRequired,
};

export default Season;
