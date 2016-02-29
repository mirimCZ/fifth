export const ADD_CHIP = 'ADD_CHIP'
export const FETCH_CHIPS_ERROR = 'FETCH_CHIPS_ERROR'
export const FETCH_CHIPS_START = 'FETCH_CHIPS_START'
export const FETCH_CHIPS_SUCCESS = 'FETCH_CHIPS_SUCCESS'

export const PLAY_CARD = 'PLAY_CARD'

export function addChip(stackId, color) {
  return {
    type: ADD_CHIP,
    payload: {stackId, color}
  };
}

export function playCard(card) {
  return {
    type: PLAY_CARD,
    payload: {card}
  };
}

export function fetchChips(/* {location, params} */) {
  // We can use location and params to create custom endpoint.
  return ({fetch}) => ({
    type: 'FETCH_CHIPS',
    payload: {
      promise: fetch('api/v1/chips/list')
        .then(response => response.json())
    }
  });
}
