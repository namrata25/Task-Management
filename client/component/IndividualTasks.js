import React from 'react';

const IndividualTasks = React.createClass({
  render() {
    return (
      <div className='individual-task'>
        <div><b>{this.props.task}</b></div>
        <div className="dropdown">
            <button className="btn btn-default dropdown-toggle dropdown-status" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <p className='status-font'>Dropup
              <span className="caret"></span></p>
            </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li className='status-font'><a href="#">Done</a></li>
            <li className='status-font'><a href="#">On hold</a></li>
            <li className='status-font'><a href="#">In Process</a></li>
            <li className='status-font'><a href="#">Sent</a></li>
            <li className='status-font'><a href="#">Schedule</a></li>
          </ul>
        </div>
        <div className='description'>{this.props.description}</div>
      </div>
    )
  }
});

export default IndividualTasks;
