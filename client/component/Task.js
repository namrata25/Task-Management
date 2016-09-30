import React from 'react';
import 'react-select/dist/react-select.css';
import Header from './Header';

const Task = React.createClass({
  render() {
    return (
      <div>
        <div className='headers'>
          <Header header='Task Management'></Header>
        </div>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
});

export default Task;
