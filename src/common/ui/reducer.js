import * as actions from './actions';
import * as chipActions from '../chips/actions'
import {Record} from 'immutable';

const InitialState = Record({
  isSideMenuOpen: false,
  colorPicker: {
    open: false,
    stackId: 0,
  },
});
const initialState = new InitialState;

export default function uiReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState;

  switch (action.type) {

    case actions.ON_SIDE_MENU_CHANGE: {
      const {isOpen} = action.payload;
      return state.set('isSideMenuOpen', isOpen);
    }

    case actions.OPEN_COLOR_PICKER: {
      return state.set('colorPicker', {
        open: true,
        stackId: action.payload.stackId,
      })
    }

    case actions.CLOSE_COLOR_PICKER:
    case chipActions.ADD_CHIP: {
      return state.set('colorPicker', {
        open: false,
        stackId: 0,
      })
    }

    case actions.TOGGLE_SIDE_MENU:
      return state.update('isSideMenuOpen', isSideMenuOpen => !isSideMenuOpen);

  }

  return state;
}
