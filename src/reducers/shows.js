import { showRequest, showSuccess, showFailure } from '../actions/showAction';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const result = handleActions(
  {
    [showRequest]: () => [],
    [showSuccess]: (_state, action) => action.payload
  },
  []
);

const isFeaching = handleActions(
  {
    [showRequest]: () => false,
    [showFailure]: () => false,
    [showRequest]: () => true
  },
  false
);

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  result,
  isFeaching,
  error
});
