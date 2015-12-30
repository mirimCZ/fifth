import * as authActions from '../auth/actions';
import * as todosActions from '../todos/actions';
import * as uiActions from '../ui/actions';
import * as chips from '../chips/actions'
import {Map} from 'immutable';
import {bindActionCreators} from 'redux';

const actions = [
  authActions,
  todosActions,
  uiActions,
  chips,
];

export default function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
