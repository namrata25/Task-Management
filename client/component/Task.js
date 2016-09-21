import React from 'react';

const Task = React.createClass({
  render() {
    return (
      <div>
        <div className='headers'>
          <p className='fonts'>Task Management</p>
        </div>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
});

export default Task;
