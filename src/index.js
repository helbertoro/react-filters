import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import Data from "./libs/data.json";
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, Data);

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
