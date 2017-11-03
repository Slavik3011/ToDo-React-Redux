import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { todoList, todoTable } from '../../actions';

const ViewSwitcher = ({ todoList, todoTable }) => (
    <div>
        <RaisedButton label="List" primary={true} onClick={todoList} />
        <RaisedButton label="Table" primary={true} onClick={todoTable} />
    </div>
);

const mapDispatchToProps = {
    todoList,
    todoTable
};

export default connect(null, mapDispatchToProps)(ViewSwitcher);