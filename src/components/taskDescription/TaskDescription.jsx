import React from 'react';
import TextField from 'material-ui/TextField';
import Create from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';

import './taskDescription.sass';


export default class TaskDescription extends React.Component {
    constructor(props) {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);

        this.state = {
            edit: false,
            description: props.description
        }
    }

    handleChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    edit() {
        this.setState({
            edit: true
        })
    }

    save() {
        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <div className="task-description">
                {
                    this.state.edit ?
                        <TextField floatingLabelText="Task description" multiLine={true} value={this.state.description} onChange={this.handleChange} /> :
                        <p>{this.state.description}</p>
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