import React from 'react';

const Single = React.createClass({
  render() {
    return (
      <div className='headers'>
          <p className='fonts'>{this.props.params.postId}  <a href="#"><span className="glyphicon glyphicon-remove remove-button"></span></a></p>
      </div>
    )
  }
});

export default Single;
// {this.props.params.postId}
