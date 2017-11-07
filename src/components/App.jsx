import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import MainPage from './mainPage/MainPage';
import TaskPage from './taskPage/TaskPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './app.sass';

export default () =>  (
    <div>
        <MuiThemeProvider>
            <Router>
                <div className="wrapper">
                    <Route exact path="/" component={MainPage} />
                    <Route path="/task/:id" component={TaskPage} />
                </div>
            </Router>
        </MuiThemeProvider>
    </div>
)