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
          {this.props.member.tasks.map((task, i) => {
              return (
                <div>
                  <IndividualTasks {... this.props} key={i} i={i} task={task}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
});

export default Single;
