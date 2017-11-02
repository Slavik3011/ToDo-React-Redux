import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddTask extends React.Component {
    render() {
        return (
            <div>
                <TextField floatingLabelText="Add new task" />
                <RaisedButton label="Add" primary={true} />
            </div>
        )
    }
}