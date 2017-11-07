import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Clear from 'material-ui/svg-icons/content/clear';
import { connect } from 'react-redux';

import './table.sass';

import { completeTask, deleteTask } from 'actions';

const TableContainer = ({ tasks, completeTask, deleteTask }) => {
    const handleCheck = e => {
        completeTask(e.target.dataset.id);
    };

    const list = () => tasks.map(task => (
        <TableRow key={task.id} >
            <TableRowColumn style={{width: '30px'}}><Checkbox checked={task.completed} onCheck={handleCheck} data-id={task.id} /></TableRowColumn>
            <TableRowColumn>
                <Link to={`/task/${task.id}`}
                      style={{textDecoration: 'none', color: '#000', display: 'block'}} >{task.name}</Link>
            </TableRowColumn>
            <TableRowColumn style={{textAlign: 'right'}}>
                <Clear onClick={handleDelete} data-id={task.id} />
            </TableRowColumn>
        </TableRow>
    ));

    const handleDelete = e => {
        deleteTask(e.target.dataset.id);
    };

    return (
        <Table>
            <TableBody showRowHover={true} stripedRows={true} displayRowCheckbox={false}>
                {list()}
            </TableBody>
        </Table>
    )
}

export default connect( ({ todos }) => ({
    tasks: todos
}), {
    completeTask,
    deleteTask
} )(TableContainer)