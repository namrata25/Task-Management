import React from 'react';
import Grid from './Grid.js';

const PhotoGrid = React.createClass({
  render() {
    return (
    
      <div className="photo-grid">
        {this.props.projects.map((project, i) => <Grid {...this.props} key={i} project={project} i={i} />)}
      </div>
    )
  }
});

export default PhotoGrid;
