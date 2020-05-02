import { SET_LANG } from './../actions/types';

import localeData from './../utils/locales/data.json';
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const INITIAL_STATE = {
  locale: language,
  messages: messages
};

export default (state = INITIAL_STATE, action) => {
  var messages = null;
  if (action.locale === "PT-pt") {
    messages = localeData.pt
  } else {
    messages = localeData.en
  }
  switch (action.type) {
    case SET_LANG:
      return { ...state, locale: action.locale, messages: messages };
    default:
      return state;
  }
};
