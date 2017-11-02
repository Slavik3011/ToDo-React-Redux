import React from 'react';

import MainPage from './mainPage/MainPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <MainPage />
                </MuiThemeProvider>
            </div>
        )
    }
}

