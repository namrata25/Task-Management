import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import tasks from './tasks';
import members from './members';
import memberStatus from './memberStatus';

const rootReducer = combineReducers({ projects, tasks, members, routing: routerReducer });

export default rootReducer;
