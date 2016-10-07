import React from 'react';


const NameCard =  React.createClass({
  render() {
    return(
      <div className='vertical-line'>
        <div className='namecard'>
          {this.props.name}
        </div>
      </div>
    )
  }
});

export default NameCard;
