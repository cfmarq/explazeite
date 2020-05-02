import { SET_CART, SET_LANG } from './types';

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart: cart
  };
};

export const setLang = (locale) => {
  return {
    type: SET_LANG,
    locale: locale
  };
};
