import * as actions from './actions';
import Chip from './Chip';
import {Map, List, Record} from 'immutable';

const InitialState = Record({
  map: Map({
    stack10: new List(),
    stack11: new List(),
    stack12: new List(),
    stack13: new List(),
    stack20: new List(), // head stack
    stack21: new List(),
    stack22: new List(),
    stack23: new List(),
    stack24: new List(),
  }),
});
const initialState = new InitialState;

// TODO fix
const revive = ({list}) => initialState

export default function chipsReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ADD_CHIP: {
      const {stackId, color} = action.payload
      const newChip = new Chip({
        stackId: stackId,
        color: color,
      })

      return state
        .updateIn(['map', 'stack' + stackId], stack => stack.push(newChip))
    }

    case actions.PLAY_CARD: {
      // check head color in stack
      // check sequence:
      // find second color, if found, try to find second, then third

      return state
    }


  }

  return state;
}
