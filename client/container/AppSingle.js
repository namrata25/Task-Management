import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TaskManager from '../component/TaskManager';

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

const AppSingle = connect(mapStateToProps, mapDispatchToProps)(TaskManager);

export default AppSingle;
