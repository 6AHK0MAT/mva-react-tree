import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from '../src/store/reducers/rootResucer';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const loggerMiddleWare = store => next => action => {
    const result = next(action)
    console.log('MiddleWare', store.getState())
    return result
}

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(loggerMiddleWare, thunk)
    )
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
