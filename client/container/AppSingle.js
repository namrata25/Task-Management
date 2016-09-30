import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Single from '../component/Single';

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

const AppSingle = connect(mapStateToProps, mapDispatchToProps)(Single);

export default AppSingle;
