import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import App from './App';
import Store from './app/store';

ReactDOM.render(
  <Router>
    <Provider store={Store}></Provider>
    <App />
  </Router>,
  document.getElementById('root')
);
