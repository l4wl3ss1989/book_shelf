import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//makes the Redux store available to any nested components that have been wrapped in the connect() function.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
//Components
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);