import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showRequest, showSuccess, showFailure } from '../actions';

const isFetching = handleActions(
  {
    [showRequest]: () => true,
    [showSuccess]: () => false,
    [showFailure]: () => false
  },
  false
);

const result = handleActions(
  {
    [showRequest]: () => [],
    [showSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [showRequest]: () => null,
    [showFailure]: (_state, action) => action.error
  },
  null
);

export default combineReducers({
  result,
  isFetching,
  error
});
