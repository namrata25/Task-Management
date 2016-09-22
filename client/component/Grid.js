import React from 'react';
import { Link } from 'react-router';

const Grid = React.createClass({
  render() {
    const { project, i} = this.props;
    return (
    <Link to={`/${project.name}`}>
    <div className="col-md-4 grid">
      <div><p className="task-heading">{project.name}</p></div>
      <div><p className="task-desc">{project.description}</p></div>
      <div><p className="task-desc"><b>{project.team}</b></p></div>
    </div>
    </Link>
    )
  }
});

export default Grid;
