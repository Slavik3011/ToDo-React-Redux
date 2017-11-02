import React from 'react';
import {List, ListItem} from 'material-ui/List';


export default (props) => {
    const list = () => props.tasks.map(task => <ListItem key={task.id} primaryText={task.name} />);

    return (
        <List>
            {list()}
        </List>
    )
}