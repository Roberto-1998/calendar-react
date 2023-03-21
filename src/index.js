import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from './CalendarApp';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <CalendarApp />
  </Router>,
  document.getElementById('root')
);
