import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Task from './Task';

function mapStateToProps(state) {
  return {
    projects: state.projects,
    tasks: state.tasks,
    members: state.members
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Task);

export default App;
