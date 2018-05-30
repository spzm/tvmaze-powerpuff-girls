import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getShow } from '../../domains/shows/actions';
import { getName } from '../../domains/shows/selectors';
import { getEpisodeBySeason } from '../../domains/episodes/actions';
import { getCurrentEpisode, getCoverLinks } from '../../domains/episodes/selectors';

import Episode from '../../components/episode';
import BreadCrumbs from '../../components/breadCrumbs';
import BreadCrumbsItem from '../../components/breadCrumbs/breadCrumbsItem';

class EpisodeDetailsContainer extends Component {
  componentDidMount() {
    const {
      getEpisodeBySeason: getEpisodeBySeasonAction,
      getShow: getShowAction,
      match,
    } = this.props;

    const { showId, season, number } = (match && match.params) || {};

    if (showId && season && number) {
      getEpisodeBySeasonAction(showId, season, number);
      getShowAction(showId);
    }
  }

  render() {
    const {
      name,
      summary,
      match,
      showName,
      coverImages,
    } = this.props;

    if (!name) return <div>Loading...</div>;

    const { showId } = (match && match.params) || {};

    return (
      <div>
        <BreadCrumbs>
          {showName
            ? (<BreadCrumbsItem to={`/show/${showId}`}>{showName}</BreadCrumbsItem>)
            : null
          }
          {name
            ? (<BreadCrumbsItem>{name}</BreadCrumbsItem>)
            : null
          }
        </BreadCrumbs>
        <Episode
          showName={showName}
          name={name}
          summary={summary}
          mediumCover={coverImages && coverImages.medium}
          largeCover={coverImages.large}
        />
      </div>
    );
  }
}

EpisodeDetailsContainer.propTypes = {
  getEpisodeBySeason: PropTypes.func.isRequired,
  getShow: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  name: PropTypes.string,
  summary: PropTypes.string,
  showName: PropTypes.string,
  coverImages: PropTypes.shape({ medium: '', large: '' }),
};

const mapStateToProps = state => ({
  ...getCurrentEpisode(state),
  coverImages: getCoverLinks(state),
  showName: getName(state),
});

export default withRouter(connect(
  mapStateToProps,
  {
    getEpisodeBySeason,
    getShow,
  },
)(EpisodeDetailsContainer));
