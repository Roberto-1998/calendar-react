import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from './CalendarApp';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import { Provider } from 'react-redux';
import store from './store/store';

console.log(process.env);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <CalendarApp />
    </Router>
  </Provider>
);
