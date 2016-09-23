import React from 'react';
import Grid from './Grid.js';
import Select from 'react-select';

const PhotoGrid = React.createClass({
  getInitialState () {
  		return {
  			multi: true,
  			multiValue: [],
        options: [],
  			value: undefined
  		};
  	},
  handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
	},
  setOptions () {
    const options = this.props.members.map((member) => ({"label": member.name, "value": member.name}))
    this.setState({options})
  },
  render() {
    const { multi, multiValue, options, value } = this.state;
    return (
      <div className="container photo-grid">
        {this.props.projects.map((project, i) => <Grid {...this.props} key={i} project={project} i={i} />)}

        <div className="col-md-4 grid1 glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal" onClick = {this.setOptions}>
          <p className="task-desc"><br/> Create New Project</p>
        </div>

        <div className="modal fade modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Create Project</h4>
              </div>

              <div className="modal-body">

                <div className="form-group">
                  <label for="inputsm">Title</label>
                  <input className="form-control input-sm bar-size" id="inputsm" type="text" placeholder="Title..."/>
                </div>
                <div className="form-group">
                  <label for="inputlg">Description</label>
                  <input className="form-control input-lg task-desc bar-size" id="inputlg" type="text" placeholder="Start typing..."/>
                </div>

                <div className="form-group">
                  <label for="inputlg">Members</label>
                  <div className="section bar-size">
                    <Select.Creatable
                        multi={multi}
                        options={options}
                        onChange={this.handleOnChange}
                        value={multi ? multiValue : value}
                     />
                  </div>
                </div>
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-default">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
});

export default PhotoGrid;
