import { CartActionTypes, Actions } from './actions';
import { Product } from '../../shared/types/Product';

export interface CartState {
  product: Product[];
}

export let initialState: CartState = {
  product: [],
};

export function cartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case CartActionTypes.ADD:
      return pushToCart(state, action.payload);
    case CartActionTypes.REMOVE:
      return pullFromCart(state, action.payload);
    case CartActionTypes.UPDATE:
      return updateItems(state, action.payload);
    case CartActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}

function pushToCart(cart: CartState, payload: Product): CartState {
  cart.product.map(x => x.id === payload.id && x.quantity > 0 ? x.quantity++ : x);
  updateItems(cart, payload);
  return cart;
}

function pullFromCart(cart: CartState, payload: Product): CartState {
  cart.product.map(x => x.id === payload.id ? x.quantity-- : x);
  cart.product.filter(x => (x.id === payload.id) || x.quantity === 0 ? x : x);
  updateItems(cart, payload);
  return cart;
}

function updateItems(cart: CartState, payload: Product) {
  const targetItem: Product = cart.product.find(item => item.id === payload.id);
  if (targetItem) {
    if (payload.quantity <= 0) {
      const index = cart.product.indexOf(targetItem);
      cart.product.splice(index, 1);
    } else {
      targetItem.quantity = payload.quantity;
    }
  } else {
    cart.product.push(payload);
  }
}
