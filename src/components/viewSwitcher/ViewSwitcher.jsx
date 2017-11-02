import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ViewSwitcher extends React.Component {
    render() {
        const { switchList, switchTable,  } = this.props;
        return (
            <div>
                <RaisedButton label="List" primary={true} onClick={switchList} />
                <RaisedButton label="Table" primary={true} onClick={switchTable} />
            </div>
        )
    }
}