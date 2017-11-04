import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { todoList, todoTable } from '../../actions';

const ViewSwitcher = ({ todoList, todoTable, list }) => (
    <div>
        {
            list ?
                <RaisedButton label="Table" primary={true} onClick={todoTable} /> :
                <RaisedButton label="List" primary={true} onClick={todoList} />
        }
    </div>
);

export default connect( ({ todoView }) => ({
    list: todoView
}), {
    todoList,
    todoTable
})(ViewSwitcher);