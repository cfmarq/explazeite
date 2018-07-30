import React from 'react';
import { render }  from 'react-dom';
import { Router, Route } from 'react-router';

import App from './App';
import Contacts from './components/Contacts';

render(
  (
    <Router>
      <Route
        path="/"
        component={App} />
      <Route
        path="/contacts"
        component={Contacts} />
    </Router>
  ), document.getElementById('app'));
