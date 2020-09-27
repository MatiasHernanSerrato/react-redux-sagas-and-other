import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'react-pro-sidebar/dist/css/styles.css';
import './index.css';
import AppRouter from './router';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
