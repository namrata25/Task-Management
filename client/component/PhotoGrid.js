import React from 'react';
import Grid from './Grid.js';
import Select from 'react-select';
import { Link } from 'react-router';

const PhotoGrid = React.createClass({
  getInitialState () {
  		return {
  			multi: true,
  			multiValue: [],
        options: [],
        title: '',
        description:'',
        totalMembers: [],
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
  handleSubmit() {
    const title = this.refs.Title.value;
    const description = this.refs.Description.value;
    const totalMembers = this.state.multiValue.length;
    const members = this.state.multiValue.map((member) => (member.value));
    this.props.addProject(title, description, totalMembers);
    this.setState({title,description, totalMembers, members});
    this.refs.Title.value = "";
    this.refs.Description.value = "";
    this.state.multiValue = [];
  },
  render() {
    const { multi, multiValue, options, value, title, description } = this.state;
    return (
      <div className="container photo-grid">
        {this.props.projects.map((project, i) => <Grid {...this.props} key={i} project={project} i={i} />)}

        <div className="col-md-4 grid1 glyphicon glyphicon-plus-sign" data-toggle="modal" data-target="#myModal" onClick = {this.setOptions}>
          <p className="task-desc:hover"><br/> Create New Project</p>
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
                  <input className="form-control input-sm task-desc" ref="Title" id="inputsm" type="text" placeholder="Title..."/>
                </div>
                <div className="form-group">
                  <label for="inputlg">Description</label>
                  <input className="form-control input-lg task-desc" ref="Description" id="inputlg" type="text" placeholder="Start typing..."/>
                </div>
                  <div className="form-group">
                    <label for="inputlg">Members</label>
                    <div className="section bar-size task-desc">
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
              <button type="submit" className="btn btn-default" data-dismiss="modal" onClick={this.handleSubmit} hidden>Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
});

export default PhotoGrid;
