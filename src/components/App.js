import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import localeData from './../utils/locales/data.json';

addLocaleData([...en, ...pt]);

import Main from './Main';

const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: language,
      messages: messages
    };
  }

  switchLang = (lang) => {
    if (lang === 'portuguese') {
      this.setState({ locale: "pt-PT", messages: localeData.pt });
    } else {
      this.setState({ locale: "en-GB", messages: localeData.en });
    }
  };

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <Main
          switchLang={this.switchLang} />
      </IntlProvider>
    );
  }
}

export default App;
