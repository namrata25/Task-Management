import React from 'react';
import { render } from 'react-dom';
import css from './styles/custom.styl';
import Task from './component/Task';
import Single from './component/Single';
import PhotoGrid from './component/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Task}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
    </Route>
    <Route path="/:postId" component={Single}></Route>
  </Router>
)

render(router, document.getElementById('root'));
