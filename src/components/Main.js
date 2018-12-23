import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from './Home';
import History from './History';
import Mill from './Mill';
import Cellar from './Cellar';
import Featured from './Featured';
import FeaturedItem1 from './FeaturedItem1';
import FeaturedItem2 from './FeaturedItem2';
import FeaturedItem3 from './FeaturedItem3';
import FeaturedItem4 from './FeaturedItem4';
import OliveOil from './OliveOil';
import Wine from './Wine';
import Olive from './Olive';
import Lupine from './Lupine';
import Mix from './Mix';
import Header from './Header';
import Footer from './Footer';
import Contacts from './Contacts';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header
              switchToPortuguese={this.props.switchToPortuguese}
              switchToEnglish={this.props.switchToEnglish} />
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/history"} component={History} />
              <Route path={"/mill"} component={Mill} />
              <Route path={"/cellar"} component={Cellar} />
              <Route path={"/featured"} component={Featured} />
              <Route path={"/featured-1"} component={FeaturedItem1} />
              <Route path={"/featured-2"} component={FeaturedItem2} />
              <Route path={"/featured-3"} component={FeaturedItem3} />
              <Route path={"/featured-4"} component={FeaturedItem4} />
              <Route path={"/products-oliveOil"} component={OliveOil} />
              <Route path={"/products-wine"} component={Wine} />
              <Route path={"/products-olive"} component={Olive} />
              <Route path={"/products-lupine"} component={Lupine} />
              <Route path={"/products-mix"} component={Mix} />
              <Route path="/contacts" component={Contacts} />
              <Route component={() => (<div>404 Not found </div>)} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default Main;
