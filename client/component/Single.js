import React from 'react';
import NameCard from './NameCard';
import IndividualTasks from './IndividualTasks';
import Header from './Header';

const Single = React.createClass({
  render(){
    return(
      <div>
        <div className='headers'>
          <Header header={this.props.params.projectId}></Header>
        </div>
        <div className='single-grid'>
          <NameCard member={this.props.members[1].name} />
        </div>
        <div>
          <IndividualTasks task={this.props.members[1].tasks[0].name}
                          description={this.props.members[1].tasks[0].description}
                          status={this.props.members[1].tasks[0].status}/>

        </div>
      </div>
    )
  }
});

export default Single;

// {this.props.members.map((member, i) => <NameCard {... this.props} key={i} i={i} member={member} />)}
