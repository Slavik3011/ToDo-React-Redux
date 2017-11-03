import React from 'react';
import { connect } from 'react-redux';

import AddTask from '../addTask/AddTask';
import ViewSwitcher from '../viewSwitcher/ViewSwitcher';
import List from '../list/List';
import Table from '../table/Table';

const tasks = [
    {
        id: 1,
        name: 'task1',
        desscription: 'sdfsa sad asd asd'
    },
    {
        id: 2,
        name: 'task2',
        desscription: 'sdfsa df j   dgh x xbx '
    },
    {
        id: 3,
        name: 'task3',
        desscription: 'j a h sadfuih kj addsbf '
    }
];

const MainPage = ({ list }) => (
    <div>
        <AddTask />
        <ViewSwitcher/>
        {list ? <List tasks={tasks}/> : <Table tasks={tasks}/>}
    </div>
);

function mapStateToProps(state) {
    return {
        list: state.todoView
    }
}

export default connect(mapStateToProps)(MainPage);