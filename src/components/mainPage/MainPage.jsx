import React from 'react';
import { connect } from 'react-redux';

import AddTask from '../addTask/AddTask';
import ViewSwitcher from '../viewSwitcher/ViewSwitcher';
import List from '../list/List';
import Table from '../table/Table';

const MainPage = ({ list, todos }) => (
    <div>
        <AddTask />
        <ViewSwitcher/>
        {list ? <List tasks={todos}/> : <Table tasks={todos}/>}
    </div>
);


export default connect( ({ todoView, todos }) => ({
    list: todoView,
    todos
}))(MainPage);