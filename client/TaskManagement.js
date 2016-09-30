import React from 'react';
import { render } from 'react-dom';
import css from './styles/custom.styl';
import App from './container/App';
import AppSingle from './container/AppSingle';
import Single from './component/Single';
import PhotoGrid from './component/PhotoGrid';
import SingleGrid from './component/SingleGrid';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
      </Route>
      <Route path="/:projectId" component={AppSingle}>
        <IndexRoute component={SingleGrid}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
