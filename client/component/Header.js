import React from 'react';

const Header = React.createClass({
  render() {
    let head;
    if(this.props.params && this.props.params.projectId) {
      head = this.props.params.projectId;
    }
    else {
      head = this.props.header;
    }
    return (
      <div className="header fonts">
        <p className='fonts'>{head}</p>
      </div>
    )
  }
});

export default Header;
