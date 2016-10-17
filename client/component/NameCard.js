import React from 'react';


const NameCard =  React.createClass({
  render() {
    return(
      <div className='vertical-line'>
        <div className='namecard'>
          {this.props.member}
        </div>
      </div>
    )
  }
});

export default NameCard;

// {this.props.member.name}
