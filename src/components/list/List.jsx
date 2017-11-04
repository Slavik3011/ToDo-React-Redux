import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Clear from 'material-ui/svg-icons/content/clear';
import { completeTask, deleteTask } from '../../actions';


const TodoList = ({ tasks, completeTask, deleteTask }) => {
    const handleCheck = e => {
        completeTask(e.target.dataset.id);
    };

    const handleDelete = e => {
        deleteTask(e.target.dataset.id);
    };

    const list = () => tasks.map(task => (
        <ListItem
            key={task.id}
            primaryText={task.name}
            leftIcon={<Checkbox checked={task.completed} onCheck={handleCheck} data-id={task.id} />}
            rightIcon={<Clear onClick={handleDelete} data-id={task.id} />}/>
    ));

    return (
        <List>
            {list()}
        </List>
    )
};

export default connect(null, {
    completeTask,
    deleteTask
})(TodoList)