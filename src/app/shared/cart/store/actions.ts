import { Action } from '@ngrx/store';
import { Product } from '../../types/Product';

export enum CartActionTypes {
  ADD = '[Add] To Cart',
  REMOVE = '[Remove] From Cart',
  UPDATE = '[Update] To Cart',
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.ADD;

  constructor(public payload: Product) {
  }
}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.REMOVE;

  constructor(public payload: Product) {
  }
}

export class UpdateToCart implements Action {
  readonly type = CartActionTypes.UPDATE;

  constructor(public payload: Product) {
  }
}

export type Actions = AddToCart | RemoveFromCart | UpdateToCart;

