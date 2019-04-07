import { MenuActionTypes, Actions } from './actions';
import { Menu } from '../../types/Menu';

export interface MenuState {
  menuItems: Menu[];
}

export let initialState: MenuState = {
  menuItems: []
};

export function menuReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case MenuActionTypes.GET:
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
}
