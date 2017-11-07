import React from 'react';
import { connect } from 'react-redux';

import AddTask from '../addTask/AddTask';
import ViewSwitcher from '../viewSwitcher/ViewSwitcher';
import List from '../list/List';
import Table from '../table/Table';

const MainPage = ({ todoView }) => (
    <div>
        <AddTask />
        <ViewSwitcher/>
        {todoView ? <List /> : <Table />}
    </div>
);


export default connect( ({ todoView }) => ({
    todoView
}))(MainPage);