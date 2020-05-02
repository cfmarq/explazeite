import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './containers/Home';
import Story from './containers/Story';
import Infrastructure from './containers/Infrastructures';
import Featured from './containers/Featured';
import FeaturedItem from './containers/Featured/FeaturedItem';
import Products from './components/Products';
import Header from './components/Header';
import Footer from './containers/Footer';
import Contacts from './containers/Contacts';

class App extends Component {

  render() {
    return (
      <IntlProvider locale={this.props.locale} messages={this.props.messages}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/story"} component={Story} />
            <Route path={"/infrastructure/:id"} component={Infrastructure} />
            <Route path={"/featured/:id"} component={FeaturedItem} />
            <Route path={"/featured"} component={Featured} />
            <Route path={"/products/:id"} component={Products} />
            <Route path="/contacts" component={Contacts} />
            <Redirect to={"/"} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.lang.locale,
    messages: state.lang.messages,
  };
};

export default connect(mapStateToProps)(App);
