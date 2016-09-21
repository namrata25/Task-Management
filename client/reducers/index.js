import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import tasks from './tasks';
import members from './members';

const rootReducer = combineReducers({ projects, tasks, members, routing: routerReducer });

export default rootReducer;
