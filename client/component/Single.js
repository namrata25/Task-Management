import React from 'react';
import Header from './Header';

const Single = React.createClass({
  render() {
    return (
      <div>
        <div className='headers'>
          <Header header={this.props.params.projectId}></Header>
        </div>
        <div className='single-grid'>
          Hello. I am Single.
        </div>
      </div>
    )
  }
});

export default Single;
