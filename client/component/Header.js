import React from 'react';

const Header = React.createClass({
  render() {
    return (
      <div className="header fonts">
          {this.props.params.postId}
      </div>
    )
  }
});

export default Header;
