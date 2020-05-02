import { SET_CART } from './types';

export const setCart = (cart) => {
  return {
    type: SET_CART,
    cart: cart
  };
};
