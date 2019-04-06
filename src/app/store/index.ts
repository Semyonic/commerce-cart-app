import { Action, ActionReducer, combineReducers } from '@ngrx/store';
import { cartReducer, CartState } from '../shared/cart/store/reducers';
import { productReducer, ProductState } from '../home/store/reducers';
import { menuReducer, MenuState } from '../shared/navbar/store/reducers';

export interface AppState {
  cartState: CartState;
  productState: ProductState;
  menuState: MenuState;
}

export const appReducers: ActionReducer<any> = combineReducers({
  cartState: cartReducer,
  productState: productReducer,
  menuState: menuReducer
});

export function rootReducer(state: AppState, action: Action) {
  return appReducers(state, action);
}
