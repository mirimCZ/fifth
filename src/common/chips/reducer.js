import * as actions from './actions';
import Chip from './Chip';
import {Map, List, Record} from 'immutable';

const InitialState = Record({
  list: List(),
});
const initialState = new InitialState;

// Note how JSON from server is revived to immutable record.
const revive = ({list}) => initialState.merge({
  list: List(list).map(chip => new Chip(chip)),
});

export default function chipsReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ADD_CHIP: {
      console.log('add', action.payload);
      const newChip = new Chip({
        stackId: action.payload.stackId,
        color: action.payload.color,
      })
      return state
        .update('list', list => list.push(newChip))
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
