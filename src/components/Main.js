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
            <Route exact path="/" component={Home} />

            <Route path="/history" component={History} />
            <Route path="/mill" component={Contacts} />
            <Route path="/cellar" component={Contacts} />

            <Route path="/olive-oil" component={Contacts} />
            <Route path="/wine" component={Contacts} />
            <Route path="/olive" component={Contacts} />
            <Route path="/lupine" component={Contacts} />
            <Route path="/mix" component={Contacts} />

            <Route path="/featured" component={Contacts} />

            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main;
