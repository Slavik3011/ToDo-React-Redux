import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Back from 'material-ui/svg-icons/hardware/keyboard-backspace';


import TaskName from '../taskName/TaskName';
import TaskDescription from '../taskDescription/TaskDescription';

const TaskPage = ({ task }) => {
    return (
        <div>
            <Link to="/"><Back /></Link>
            <TaskName id={task.id} name={task.name}/>
            <TaskDescription id={task.id} description={task.description}/>

        </div>
    )
};

export default connect( ({ todos }, { match }) => {
    let task = todos.find(task => task.id == match.params.id);
    return {
        task
    }
} )(TaskPage)