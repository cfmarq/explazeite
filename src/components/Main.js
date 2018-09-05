import React from 'react';
import { Switch, Route, BrowserRouter, IndexRoute, Link } from 'react-router-dom';

import Home from './Home';
import History from './History';
import Header from './Header';
import Footer from './Footer';
import Contacts from './Contacts';

const Main = () => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Header/>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/history"} component={History} />
            <Route path={"/featured"} component={Contacts} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main;
