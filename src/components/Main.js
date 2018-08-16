import React from 'react';
import { Route, BrowserRouter, IndexRoute, Link } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main;
