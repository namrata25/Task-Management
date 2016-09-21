import React from 'react';
import { Link } from 'react-router';

const Grid = React.createClass({
  render() {
    const { project, i} = this.props;
    return (
    <Link to={`/${project.name}`}>
      <figure className="project-grid">
        <div className="grid-photo-wrap">
          <div><p className="task-heading">{project.name}</p></div>
          <div><p className="task-desc">{project.description}</p></div>
          <div><p className="task-desc"><b>{project.team}</b></p></div>
        </div>
      </figure>
      </Link>
    )
  }
});

export default Grid;
