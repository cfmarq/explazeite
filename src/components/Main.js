import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import History from './History';
import Mill from './Mill';
import Cellar from './Cellar';
import Featured from './Featured';
import FeaturedItem1 from './FeaturedItem1';
import FeaturedItem2 from './FeaturedItem2';
import FeaturedItem3 from './FeaturedItem3';
import Header from './Header';
import Footer from './Footer';
import Contacts from './Contacts';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/history"} component={History} />
            <Route path={"/mill"} component={Mill} />
            <Route path={"/cellar"} component={Cellar} />
            <Route path={"/featured"} component={Featured} />
            <Route path={"/featuredItem1"} component={FeaturedItem1} />
            <Route path={"/featuredItem2"} component={FeaturedItem2} />
            <Route path={"/featuredItem3"} component={FeaturedItem3} />
            <Route path="/contacts" component={Contacts} />
            <Route component={() => (<div>404 Not found </div>)} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Main;
