import React from 'react';
import NameCard from './NameCard';
import IndividualTasks from './IndividualTasks';


const Single = React.createClass({
  render(){
    return(
      <div>
        <div className='single-grid'>
          <NameCard member={this.props.member.name} />
        </div>
        <div>
          <IndividualTasks task={this.props.member.tasks[0].name}
                          description={this.props.member.tasks[0].description}
                          status={this.props.member.tasks[0].status}/>
        </div>
      </div>
    )
  }
});

export default Single;
