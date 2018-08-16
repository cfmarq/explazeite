import React from 'react';
import { Switch, Route, BrowserRouter, IndexRoute, Link } from 'react-router-dom';

import Home from './Home';
import History from './History';
import Header from './Header';
import Contacts from './Contacts';

const Main = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header/>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />

            <Route path={process.env.PUBLIC_URL + "/history"} component={History} />

            <Route path={process.env.PUBLIC_URL + "/featured"} component={Contacts} />

            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main;
