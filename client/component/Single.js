import React from 'react';
import NameCard from './NameCard';
import SingleGrid from './SingleGrid';
import Header from './Header';

const Single = React.createClass({
  render(){
    return(
      <div>
        <div className='headers'>
          <Header header={this.props.params.projectId}></Header>
        </div>
        <div className='single-grid'>
          <NameCard name='Namrata GUpta' />
        </div>
      </div>
    )
  }
});

export default Single;
