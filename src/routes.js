import React from 'react';
import { Switch, Route, IndexRoute } from 'react-router-dom';

import App from './components/App';
import Contacts from './components/Contacts';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </div>
);
