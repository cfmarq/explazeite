import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router, BrowserHistory } from 'react-router-dom';
import routes from './routes';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';

import App from './components/App';

// Our translated strings
import localeData from './utils/locales/data.json';

addLocaleData([...en, ...pt]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>,
    document.getElementById('root')
  )
