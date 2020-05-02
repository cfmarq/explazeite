import { SET_CART } from './../actions/types';

const INITIAL_STATE = {
  cart: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.cart };
    default:
      return state;
  }
};
