import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from './CalendarApp';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';

ReactDOM.render(
  <Router>
    <CalendarApp />
  </Router>,
  document.getElementById('root')
);
