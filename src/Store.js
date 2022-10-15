import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

import { Platform } from 'react-native';
import RootReducer from './Reducers';
import devTools from 'remote-redux-devtools';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
    RootReducer,
    compose(
        middleware,       
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);



export default Store;