import React from 'react';
import { Link } from 'react-router';

const Grid = React.createClass({
  render() {
    const { project, i} = this.props;
    return (
    <Link to={`/${project.Title}`}>
    <div className="col-md-4 grid">
      <div><p className="task-heading">{project.Title}</p></div>
      <div><p className="task-desc">{project.Description}</p></div>
      <div><p className="task-desc"><b>{project.Members}</b></p></div>
    </div>
    </Link>
    )
  }
});

export default Grid;
