import { Action, ActionReducer, combineReducers } from '@ngrx/store';
import { cartReducer, CartState } from '../home/store/reducers';

export interface AppState {
  cartState: CartState;
}

export const appReducers: ActionReducer<any> = combineReducers({
  cartState: cartReducer
});

export function rootReducer(state: AppState, action: Action) {
  return appReducers(state, action);
}
