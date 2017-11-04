import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

export default props => {
    const handleCheck = e => {
        console.log(e.target.dataset.id);
        console.log('click');
    };

    const list = () => props.tasks.map(task => (
        <TableRow key={task.id} >
            <TableRowColumn><Checkbox checked={task.completed} onCheck={handleCheck} data-id={task.id} /></TableRowColumn>
            <TableRowColumn>{task.name}</TableRowColumn>
        </TableRow>
    ));

    return (
        <Table>
            <TableBody showRowHover={true} stripedRows={true} displayRowCheckbox={false}>
                {list()}
            </TableBody>
        </Table>
    )
}