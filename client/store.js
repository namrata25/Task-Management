import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import projects from './data/projects';
import tasks from './data/tasks';
import members from './data/members';

const defaultState = {
  projects,
  tasks,
  members
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
