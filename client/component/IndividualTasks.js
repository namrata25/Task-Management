import React from 'react';

const IndividualTasks = React.createClass({
  getInitialState() {
    return {
      status: this.props.task.status
    };
  },
  setStatus() {
    console.log('in setStatus function');
    var status1 = this.refs.status.value;
    console.log('---value', status1);
    this.setState({status:status1});
  },
  render() {
    const status = this.state;
    return (
      <div className='individual-task'>
        <div><b>{this.props.task.name}</b></div>
        <select className="dropdown" onChange={this.setStatus} ref='status'>
          <option>{this.state.status}</option>
          <option value='done'>Done</option>
          <option value='onHold'>On Hold</option>
          <option value='inProcess'>In Process</option>
          <option value='sent'>Sent</option>
          <option value='schedule'>Schedule</option>
        </select>
        <div className='description'>{this.props.task.description}</div>
      </div>
    )
  }
});

export default IndividualTasks;
/*<select onChange={this.setStatus}>
  <option value='1'>1</option>
  <option value='2'>2</option>
</select>*/
