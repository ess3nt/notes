/**
 * Created by Igor on 13.11.2016.
 */
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store'
import { routes } from './routes'

const store = configureStore();
const rootEl = document.getElementById('root');

render(
    <AppContainer>
        <MuiThemeProvider >
            <Provider store={store}>
                <Router history={browserHistory} routes={routes}/>
            </Provider>
        </MuiThemeProvider>
    </AppContainer>,
    rootEl
);

if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept('./routes', () => {
            // If you use Webpack 2 in ES modules mode, you can
            // use <App /> here rather than require() a <NextApp />.
            const NextApp = require('./routes');
            render(
                <AppContainer>
                    <MuiThemeProvider >
                        <Provider store={store}>
                            <Router history={browserHistory} routes={routes}/>
                        </Provider>
                    </MuiThemeProvider>
                </AppContainer>,
                rootEl
            );
        });
    }
}

