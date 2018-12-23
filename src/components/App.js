import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
// Our translated strings
import localeData from './../utils/locales/data.json';

addLocaleData([...en, ...pt]);

import Main from './Main';


class App extends Component {
  constructor(props) {
    super(props);

    this.switchToEnglish = () =>
      this.setState({ locale: "en-GB", messages: localeData.en });

    this.switchToPortuguese = () =>
      this.setState({ locale: "pt-PT", messages: localeData.pt });

    this.state = {
      locale: "pt-PT",
      messages: localeData.pt,
      switchToEnglish: this.switchToEnglish,
      switchToPortuguese: this.switchToPortuguese
    };
  }

  render() {
    return (
      console.log(this.state.locale),
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <Main
          switchToPortuguese={this.switchToPortuguese}
          switchToEnglish={this.switchToEnglish} />
      </IntlProvider>
    );
  }
}

export default App;
