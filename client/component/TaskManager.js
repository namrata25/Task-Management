import React from 'react';
import Single from './Single';
import Header from './Header';

const TaskManager = React.createClass({
  render(){
    return(
      <div >
        <div className='headers'>
          <Header header={this.props.params.projectId}></Header>
        </div>
        <div className='card-list'>
          {
            this.props.members.map((member, i) => {
              return (
                <div>
                  <Single {... this.props} key={i} i={i} member={member}/>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
  }
});

export default TaskManager;
