import * as actions from './actions';
import Chip from './Chip';
import {Map, List, Record} from 'immutable';
import findSequence from './find'

const InitialState = Record({
  map: Map({
    stack10: new List(),
    stack11: new List([
      new Chip({stackId: 11, color: 'green'})
    ]),
    stack12: new List(),
    stack13: new List(),
    stack20: new List([
      new Chip({stackId: 20, color: 'yellow'})
    ]), // head stack
    stack21: new List([
      new Chip({stackId: 21, color: 'blue'})
    ]),
    stack22: new List(),
    stack23: new List(),
    stack24: new List([
      new Chip({stackId: 24, color: 'red'})
    ]),
  }),
  stacksOrder: new List([24, 10, 23, 12, 22, 13, 21, 11]),

  playCards: new List([
    new List(['yellow', 'red', 'blue', 'green']),
    new List(['red', 'yellow', 'green', 'blue']),
    new List(['blue', 'yellow', 'red', 'green']),
    new List(['yellow', 'red', 'blue', 'green']),
    new List(['red', 'yellow', 'green', 'blue']),
    new List(['blue', 'yellow', 'red', 'green']),
    new List(['yellow', 'red', 'blue', 'green']),
    new List(['red', 'yellow', 'green', 'blue']),
    new List(['blue', 'yellow', 'red', 'green']),
    new List(['yellow', 'red', 'blue', 'green']),
    new List(['red', 'yellow', 'green', 'blue']),
    new List(['blue', 'yellow', 'red', 'green']),
    new List(['yellow', 'red', 'blue', 'green']),
    new List(['red', 'yellow', 'green', 'blue']),
    new List(['blue', 'yellow', 'red', 'green']),
    new List(['yellow', 'red', 'blue', 'green']),
  ]),
  cardsInHand: new List([
    new List(['yellow', 'red', 'blue', 'green']),
    new List(['red', 'yellow', 'green', 'blue']),
    new List(['blue', 'yellow', 'red', 'green']),
  ]),
  winningCards: new List([])
});
const initialState = new InitialState;

// TODO fix
const revive = () => initialState

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
      const {card} = action.payload
      const lastHeadChip = state
        .getIn(['map', 'stack20'])
        .last()

      if (!lastHeadChip) {
        // when there is no head chip, no card can be played
        return state
      }

      if (!lastHeadChip === card.first()) {
        // head color doesnt check, skip looking for more
        return state
      } else {
        const cardWithoutHead = card.shift()
        const colorCodes = new Map({
          yellow: 1,
          red: 2,
          green: 3,
          blue: 4,
        })
        const lastChipColors = state
          .get('stacksOrder')
          .reduce((result, stackId) => {
            const stack = state.getIn(['map', 'stack' + stackId])
            if (stack.last()) {
              return result.push(colorCodes.get(stack.last().get('color')))
            } else {
              return result.push(0)
            }
          }, new List())

        // check that chips go after each other
        console.log(findSequence(lastChipColors, cardWithoutHead.map(card => colorCodes.get(card))));

        // if success - move card to winning
        // request new card to this player hand
      }

      return state
    }
  }

  return state;
}
