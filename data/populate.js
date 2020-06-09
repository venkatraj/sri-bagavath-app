import { EVENTS, MAGAZINES } from './dummy-data';
import { addEvent } from '../store/actions/events';
import { addMagazine } from '../store/actions/magazines';

const populateData = (store) => {
  EVENTS.forEach((event) => {
    store.dispatch(addEvent(event));
  });

  MAGAZINES.forEach((magazine) => {
    store.dispatch(addMagazine(magazine));
  });
};

export default populateData;
