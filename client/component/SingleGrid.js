import React from 'react';

const SingleGrid = React.createClass({
  render() {
    return (
      <div>
          <div className="dropup">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropup
              <span className="caret"></span>
            </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
      </div>
      <div>{this.props.description}</div>
      </div>
    )
  }
});

export default SingleGrid;
