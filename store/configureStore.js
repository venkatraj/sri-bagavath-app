import { createStore, combineReducers } from 'redux';
import eventsReducer from './reducers/events';

const configureStore = () => {
  return createStore(
    combineReducers({
      events: eventsReducer,
    })
  );
};

export default configureStore;
