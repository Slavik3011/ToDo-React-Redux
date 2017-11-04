import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';


const renderApp = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

renderApp(App);

if (module.hot) {
    module.hot.accept('./components/App', () => { renderApp(App); });
}