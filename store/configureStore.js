import { createStore, combineReducers } from 'redux';
import eventsReducer from './reducers/events';
import magazinesReducer from './reducers/magazines';

const configureStore = () => {
  return createStore(
    combineReducers({
      events: eventsReducer,
      magazines: magazinesReducer,
    })
  );
};

export default configureStore;
