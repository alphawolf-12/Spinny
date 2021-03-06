import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/reducers';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    const {logger} = require('redux-logger');
    middlewares.push(logger);
}

export const getStore = preloadedState => {
    const store = createStore(reducer, preloadedState,applyMiddleware(...middlewares) );
    return store;
}