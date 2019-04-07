import { Action } from '@ngrx/store';
import { Menu } from '../../types/Menu';

export enum MenuActionTypes {
  GET = '[Get] Menu',
}

export class GetMenu implements Action {
  readonly type = MenuActionTypes.GET;

  constructor(public payload: Menu[]) {
  }
}

export type Actions = GetMenu;

