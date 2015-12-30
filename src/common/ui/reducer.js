import * as actions from './actions';
import {Record} from 'immutable';

const InitialState = Record({
  isSideMenuOpen: false,
  colorPicker: {
    open: false,
    position: '',
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
      const {containerIndex, position, stackId} = action.payload
      const newColorPicker = {
        open: true,
        position: containerIndex + '-' + position,
        stackId: stackId,
      }
      return state.set('colorPicker', newColorPicker)
    }

    case actions.TOGGLE_SIDE_MENU:
      return state.update('isSideMenuOpen', isSideMenuOpen => !isSideMenuOpen);

  }

  return state;
}
