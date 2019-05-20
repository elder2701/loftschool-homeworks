import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import { searchMiddleware } from './middlewares/searchMiddleware';
import { showMiddleware } from './middlewares/showMiddleware';

const getStore = () => {
  return createStore(
    reducers,
    compose(
      applyMiddleware(searchMiddleware),
      applyMiddleware(showMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );
};

export default getStore;
