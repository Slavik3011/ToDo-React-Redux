import React from 'react';

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
]

export default class MainPage extends React.Component {
    constructor() {
        super();

        this.switchList = this.switchList.bind(this);
        this.switchTable = this.switchTable.bind(this);

        this.state = {
            list: true
        }
    }

    switchList() {
        this.setState({
            list: true
        })
    }

    switchTable() {
        this.setState({
            list: false
        })
    }

    render() {
        return (
            <div>
                <AddTask />
                <ViewSwitcher switchList={this.switchList} switchTable={this.switchTable} />
                {this.state.list ? <List tasks={tasks}/> : <Table tasks={tasks}/>}
            </div>
        )
    }
}