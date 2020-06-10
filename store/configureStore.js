import { createStore, combineReducers } from 'redux';
import eventsReducer from './reducers/events';
import magazinesReducer from './reducers/magazines';
import ebooksReducer from './reducers/ebooks';
import productsReducer from './reducers/products';

const configureStore = () => {
  return createStore(
    combineReducers({
      events: eventsReducer,
      magazines: magazinesReducer,
      ebooks: ebooksReducer,
      products: productsReducer,
    })
  );
};

export default configureStore;
