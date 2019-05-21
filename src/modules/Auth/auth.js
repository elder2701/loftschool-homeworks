// Реализуйте редьюсер
import { handleActions } from 'redux-actions';
import { addKey } from './actions';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

const apiKey = handleActions(
  {
    [addKey]: (_state, action) => action.payload
  },
  ''
);

export default combineReducers({ apiKey });

export const getApiKey = createSelector(
  state => state.auth.apiKey,
  apiKey => apiKey
);
