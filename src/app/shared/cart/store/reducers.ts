import { CartActionTypes, Actions } from './actions';
import { Product } from '../../types/Product';

export interface CartState {
  product: Product[];
}

export const initialState: CartState = {
  product: []
};

export function cartReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case CartActionTypes.ADD:
      return add(state, action.payload);
    case CartActionTypes.REMOVE:
      return remove(state, action.payload);
    case CartActionTypes.UPDATE:
      return update(state, action.payload);
    default:
      return initialState;
  }
}

function add(cart: CartState, payload: Product): CartState {
  const newState = cart;
  cart.product.map(x => (x.id === payload.id) ? x.quantity += 1 : x);
  update(cart, payload);
  return { ...newState };
}

function remove(cart: CartState, payload: Product): any {
  update(cart, payload);
  return {
    ...cart,
    product: cart.product.filter(x => x.id !== payload.id)
  };
}

function update(cart: CartState, payload: Product) {
  const targetItem: Product = cart.product.find(item => item.id === payload.id);
  if (targetItem) {
    if (payload.quantity <= 1) {
      const index = cart.product.indexOf(targetItem);
      cart.product.filter(x => x.quantity > 0);
      cart.product.splice(index, 1);
      return cart;
    } else {
      targetItem.quantity = payload.quantity;
      payload.quantity = 1;
      return cart;
    }
  } else {
    return cart.product.push(payload);
  }
}
