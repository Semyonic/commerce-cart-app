import { Action } from '@ngrx/store';
import { Product } from '../../shared/types/Product';

export enum ProductActionTypes {
  ADD = '[Add] Products',
  RESET = '[Reset] State'
}

export class GetProducts implements Action {

  readonly type = ProductActionTypes.ADD;

  constructor(public payload: Product) {
  }
}

export class ResetState implements Action {
  readonly type = ProductActionTypes.RESET;

  constructor() {
  }
}

export type Actions = GetProducts | ResetState;
