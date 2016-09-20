import React from 'react';

const Task = React.createClass({
  render() {
    return (
      <div className='headers'>
          <p className='fonts'>Task Management</p>
          {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Task;
