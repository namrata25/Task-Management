import React from 'react';

const Single = React.createClass({
  render() {
    return (
      <div className='headers'>
          <p className='fonts'>{this.props.params.postId}</p>
      </div>
    )
  }
});

export default Single;
