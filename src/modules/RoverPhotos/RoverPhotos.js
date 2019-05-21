// Реализуйте редьюсер
// Файл с тестами RoverPhotos.test.js поможет вам в этом
import { handleActions } from 'redux-actions';
import {
  changeSol,
  fetchPhotosRequest,
  fetchPhotosSuccess,
  fetchPhotosFailure
} from './actions';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
import { SOL_MAX, SOL_MIN, ROVERS } from './constants';

const initSolState = {
  current: 1,
  max: SOL_MAX,
  min: SOL_MIN
};

const sol = handleActions(
  {
    [changeSol]: (state, action) => ({
      ...state,
      current: action.payload
    })
  },
  initSolState
);

const initialState = ROVERS.reduce((prev, cur) => ({ ...prev, [cur]: {} }), {});

const setRoverSolState = (state, action, roverState) => {
  const { name, sol } = action.payload;
  return {
    ...state,
    [name]: {
      ...state[name],
      [sol]: {
        ...state[name][sol],
        ...roverState
      }
    }
  };
};

const setRoverState = (state, action, roverState) => {
  const { name } = action.payload;
  return {
    ...state,
    [name]: {
      ...state[name],
      ...roverState
    }
  };
};

const photos = handleActions(
  {
    [fetchPhotosSuccess]: (state, action) =>
      setRoverSolState(state, action, {
        isLoading: false,
        isLoaded: true,
        photos: action.payload.photos
      }),
    [fetchPhotosRequest]: (state, action) =>
      setRoverSolState(state, action, {
        isLoading: true,
        isLoaded: false,
        photos: []
      })
  },
  initialState
);

const error = handleActions(
  {
    [fetchPhotosSuccess]: (state, action) =>
      setRoverState(state, action, { error: '' }),
    [fetchPhotosRequest]: (state, action) =>
      setRoverState(state, action, { error: '' }),
    [fetchPhotosFailure]: (state, action) =>
      setRoverState(state, action, { error: action.payload })
  },
  initialState
);

export default combineReducers({ sol, photos, error });

export const getSol = createSelector(
  state => state.roverPhotos.sol.current,
  current => current
);

export const getPhotos = createSelector(
  state => state.roverPhotos.photos,
  photos => memoize((roverName, sol) => photos[roverName][sol])
);

export const getError = createSelector(
  state => state.roverPhotos.error,
  error => memoize(roverName => error[roverName]['error'])
);
