import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import  {Provider} from 'react-redux'
import orderReducer from './reducers/orderReducer'
import createSagaMiddleware from 'redux-saga'
import watchAction from './actions/sagaAction'

const SagaMidderware = createSagaMiddleware()

const Store = createStore(orderReducer,applyMiddleware(SagaMidderware))

SagaMidderware.run(watchAction)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
