import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Pages from './pages/Pages';
import registerServiceWorker from './registerServiceWorker';
import ErrorBoundary from './containers/errorBoundaries';
import configureStore from './store';

import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <ErrorBoundary>
        <Pages />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
