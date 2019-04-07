import { Product } from '../../shared/types/Product';
import { Actions, ProductActionTypes } from './actions';

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: []
};

export function productReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ProductActionTypes.ADD:
      return {
        ...state,
        products: action.payload,
      };
    case ProductActionTypes.RESET:
      return {
        ...state
      };
    default:
      return state;
  }
}
