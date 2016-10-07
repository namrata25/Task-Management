import React from 'react';


const NameCard =  React.createClass({
  render() {
    return(
      <div>
          {this.props.name}
      </div>
    )
  }
});

export default NameCard;
