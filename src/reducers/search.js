import {
  searchRequest,
  searchSuccess,
  searchFailure
} from '../actions/searchAction';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

const isFetching = handleActions(
  {
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
  },
  false
);

const result = handleActions(
  {
    [searchRequest]: () => [],
    [searchSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [searchRequest]: () => null,
    [searchFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  result,
  error
});

export const getResult = createSelector(
  state => state.search.result,
  result =>
    result.map(({ id, name, image, summary }) => ({
      id,
      name,
      image,
      summary
    }))
);
export const getIsFetching = state => state.search.isFeatching;
export const getError = state => state.search.error;
