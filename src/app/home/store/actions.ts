import { Action } from '@ngrx/store';

export enum CartActionTypes {
  ADD = 'Add To Cart',
  REMOVE = 'Remove From Cart',
  RESET = 'Reset Cart'
}

export class AddToCart implements Action {
  readonly type = CartActionTypes.ADD;

  constructor(public payload: any) {
  }
}

export class RemoveFromCart implements Action {
  readonly type = CartActionTypes.REMOVE;

  constructor(public payload: any) {
  }
}

export class ResetCart {
  readonly type = CartActionTypes.RESET;

  constructor(public payload: any) {
  }
}

export type Actions = AddToCart | RemoveFromCart | ResetCart;

