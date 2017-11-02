import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

export default props => {
    const list = () => props.tasks.map(task => (
        <TableRow key={task.id} >
            <TableRowColumn>{task.name}</TableRowColumn>
        </TableRow>
    ));

    const click = () => console.log('click');

    return (
        <Table onCellClick={click}>
            <TableBody showRowHover={true} stripedRows={true} displayRowCheckbox={false}>
                {list()}
            </TableBody>
        </Table>
    )
}