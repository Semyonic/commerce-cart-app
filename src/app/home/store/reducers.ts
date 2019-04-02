import { CartActionTypes, Actions } from './actions';
import { Product } from '../../shared/types/Product';

export interface CartState {
  quantity: number;
  total: number;
  product: Product;
}

export let initialState: CartState = {
  quantity: null,
  total: null,
  product: null
};

export function cartReducer(state = initialState, { payload, type }: Actions) {
  switch (type) {
    case CartActionTypes.ADD:
      state = initialState;
      return addToCart(state, payload);
    case CartActionTypes.REMOVE:
      state = initialState;
      return removeFromCart(state, payload);
    default:
      return state;
  }
}

function addToCart(cart: CartState, payload: Product) {
  cart.quantity += 1;
  cart.total += Number(payload.price);
  cart.product = payload;
  return cart;
}

function removeFromCart(cart, payload) {
  cart.quantity -= 1;
  cart.total = payload.price;
  return cart;
}
