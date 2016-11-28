/**
 * Created by Igor on 14.11.2016.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
    let middlewares = [thunk],
        devToolsExtensionRedux = f => f; // todo some experiment

    if (process.env.NODE_ENV !== 'production') {
        let logger = createLogger();
        middlewares.push(logger);
        devToolsExtensionRedux = window.devToolsExtension ? window.devToolsExtension() : f => f
    }

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares),
            devToolsExtensionRedux
        )
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('../reducers', () => {
                const nextRootReducer = require('../reducers/index')
                store.replaceReducer(nextRootReducer)
            });
        }
    }

    return store
}
