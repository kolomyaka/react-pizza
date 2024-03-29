import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './scss/app.scss';

import App from './App';
import store from './redux/reducers/index.ts'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >  
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
