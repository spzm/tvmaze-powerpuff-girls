import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Season from '../../components/season';
import { getEpisodes } from '../../domains/episodes/actions';
import { getEpisodesList, getError, getLoading } from '../../domains/episodes/selectors';
import ErrorMessage from '../../components/errorMessage';


class EpisodesContainer extends Component {
  componentDidMount() {
    const { getEpisodesAction, showId } = this.props;

    if (showId) {
      getEpisodesAction(showId);
    }
  }

  componentDidUpdate(prevProps) {
    const { getEpisodesAction, showId } = this.props;

    if (showId !== prevProps.showId && showId !== undefined) {
      getEpisodesAction(showId);
    }
  }

  render() {
    const {
      episodes,
      showId,
      error,
      loading,
    } = this.props;

    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (!episodes || loading) return <div>Loading...</div>;

    const episodesBySeason = episodes.reduce((acc, episode) => {
      if (!acc[episode.season]) acc[episode.season] = [];
      acc[episode.season].push(episode);
      return acc;
    }, {});

    return Object.keys(episodesBySeason)
      .map(seasonNumber => (<Season
        key={`season-${seasonNumber}`}
        number={seasonNumber}
        episodes={episodesBySeason[seasonNumber]}
        showId={showId}
      />));
  }
}

EpisodesContainer.propTypes = {
  episodes: PropTypes.array,
  getEpisodesAction: PropTypes.func.isRequired,
  showId: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  episodes: getEpisodesList(state),
  error: getError(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  {
    getEpisodesAction: getEpisodes,
  },
)(EpisodesContainer);
