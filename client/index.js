/**
 * Created by Igor on 13.11.2016.
 */
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import configureStore from './store'
import { routes } from './routes'

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
