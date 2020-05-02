import { combineReducers } from 'redux';
import storeReducer from './storeReducer';
import i18nReducer from './i18nReducer';

export default combineReducers({
  store: storeReducer,
  lang: i18nReducer
});
