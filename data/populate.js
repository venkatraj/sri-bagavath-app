import { EVENTS } from './dummy-data';
import { addEvent } from '../store/actions/events';

const populateData = (store) => {
  EVENTS.forEach((event) => {
    store.dispatch(addEvent(event));
  });
};

export default populateData;
