import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Episodes from '../../containers/episodesContainer';
import Show from '../../components/show';
import { getName, getCoverLinks, getDescription } from '../../domains/shows/selectors';
import { getShow } from '../../domains/shows/actions';

const getRouterParam = (routerMatch, key) =>
  (routerMatch && routerMatch.params && routerMatch.params[key]) || undefined;


const routerShowKey = 'showId';

class ShowContainer extends Component {
  componentDidMount() {
    const { getShowAction, match } = this.props;

    const showId = getRouterParam(match, routerShowKey);

    if (showId) {
      getShowAction(showId);
    }
  }

  componentDidUpdate(prevProps) {
    const { getShowAction, match } = this.props;

    const prevShowId = getRouterParam(prevProps.match, routerShowKey);
    const currentShowId = getRouterParam(match, routerShowKey);

    if (prevShowId !== currentShowId && currentShowId !== undefined) {
      getShowAction(currentShowId);
    }
  }

  render() {
    const {
      name,
      description,
      coverImages,
      match,
    } = this.props;

    if (!name) return <div>Loading...</div>;

    const showId = match && match.params && match.params.showId;

    return (
      <Fragment>
        <Show
          name={name}
          description={description}
          mediumCover={coverImages && coverImages.medium}
          largeCover={coverImages.large}
        />
        <Episodes showId={showId} />
      </Fragment>
    );
  }
}

ShowContainer.propTypes = {
  coverImages: PropTypes.shape({ medium: '', large: '' }),
  description: PropTypes.string,
  getShowAction: PropTypes.func.isRequired,
  match: PropTypes.shape({ }),
  name: PropTypes.string,
};

const mapStateToProps = state => ({
  name: getName(state),
  description: getDescription(state),
  coverImages: getCoverLinks(state),
});

export default withRouter(connect(
  mapStateToProps,
  {
    getShowAction: getShow,
  },
)(ShowContainer));
