import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { incrementTask, addTask } from '../../actions';


class AddTask extends React.Component {
    constructor() {
        super();

        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            task: ''
        }
    }

    handleChange(e) {
        this.setState({
           task: e.target.value
        });
    }

    addTask() {
        let newTask = {
            id: this.props.nextTaskId,
            name: this.state.task,
            completed: false,
            description: ''
        };

        this.props.addTask(newTask);
        this.props.incrementTask();
        this.setState({
            task: ''
        })
    };

    render() {
        return (
            <div>
                <TextField floatingLabelText="Add new task" value={this.state.task} onChange={this.handleChange} />
                <RaisedButton label="Add" primary={true} onClick={this.addTask} />
            </div>
        )
    }
}

export default connect( ({nextTaskId}) => ({
    nextTaskId
}), {
    incrementTask,
    addTask
} )(AddTask);
