import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';

import { incrementTask, addTask } from 'actions';


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

    addTask(e) {
        if(e.keyCode == 13) {
            let { nextTaskId, addTask, incrementTask } = this.props,
                newTask = {
                    id: nextTaskId,
                    name: this.state.task,
                    completed: false,
                    description: 'description'
                };

            addTask(newTask);
            incrementTask();

            this.setState({
                task: ''
            })
        }
    }

    render() {
        return (
            <div>
                <TextField floatingLabelText="Add new task"
                           fullWidth = {true}
                           value={this.state.task}
                           onChange={this.handleChange}
                           onKeyDown={this.addTask}/>
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
