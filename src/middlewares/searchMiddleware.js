import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { search } from '../api';

const searchMiddleware = store => next => async action => {
  const result = next(action);
  if (action.type === searchRequest.toString()) {
    try {
      const response = await search(action.payload);
      store.dispatch(searchSuccess(response));
    } catch (e) {
      store.dispatch(searchFailure(e));
    }
  }
  return result;
};

export default searchMiddleware;
