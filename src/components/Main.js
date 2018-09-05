import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import History from './History';
import Header from './Header';
import Footer from './Footer';
import Contacts from './Contacts';

const Main = () => {
  return (
    <div>
      <HashRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"history"} component={History} />
            <Route path={"featured"} component={Contacts} />
            <Route path="contacts" component={Contacts} />
          </Switch>
          <Footer/>
        </div>
      </HashRouter>
    </div>
  )
}

export default Main;
