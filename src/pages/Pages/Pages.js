import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'normalize.css';
import ErrorBoundary from '../../containers/errorBoundaries';
import showContainer from '../../containers/showContainer';
import EpisodesDetailsContainer from '../../containers/episodeDetailsContainer';
import NotFound from '../NotFound';
import Header from '../../components/header';
import MainSection from '../../components/mainSection';

const powerpuffGirlsId = 6771;

const Pages = () => (
  <Fragment>
    <ErrorBoundary>
      <Header />
    </ErrorBoundary>
    <ErrorBoundary>
      <MainSection>
        <Switch>
          <Redirect path="/" exact to={`/show/${powerpuffGirlsId}`} />
          <Route path="/show/:showId" exact component={showContainer} />
          <Route path="/show/:showId/episodes/:season/:number" exact component={EpisodesDetailsContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainSection>
    </ErrorBoundary>
  </Fragment>
);

export default Pages;
