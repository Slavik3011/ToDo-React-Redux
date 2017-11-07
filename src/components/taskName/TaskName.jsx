import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Create from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import { renameTask } from 'actions';

import './taskName.sass';


class TaskName extends React.Component {
    constructor(props) {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);

        this.state = {
            edit: false,
            name: props.name
        }
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    edit() {
        this.setState({
            edit: true
        })
    }

    save() {
        let { id } = this.props,
            { name } = this.state;

        renameTask({
            id,
            name
        });

        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <div className="task-name">
                {
                    this.state.edit ?
                        <TextField floatingLabelText="Task name" value={this.state.name} onChange={this.handleChange} /> :
                        <h1>{this.state.name}</h1>
                }
                <span>
                    {
                        this.state.edit ?
                            <Done onClick={this.save} /> :
                            <Create onClick={this.edit} />
                    }
                </span>
            </div>
        )
    }
}

export default connect(null, {
    renameTask
})(TaskName)