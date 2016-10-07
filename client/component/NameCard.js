import React from 'react';


const NameCard =  React.createClass({
  render() {
    return(
      <div className='namecard'>
          {this.props.name}
      </div>
    )
  }
});

export default NameCard;
