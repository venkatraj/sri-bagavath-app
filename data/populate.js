import { EVENTS, MAGAZINES, EBOOKS } from './dummy-data';
import { addEvent } from '../store/actions/events';
import { addMagazine } from '../store/actions/magazines';
import { addEBook } from '../store/actions/ebooks';

const populateData = (store) => {
  EVENTS.forEach((event) => {
    store.dispatch(addEvent(event));
  });

  MAGAZINES.forEach((magazine) => {
    store.dispatch(addMagazine(magazine));
  });

  EBOOKS.forEach((ebook) => {
    store.dispatch(addEBook(ebook));
  });
};

export default populateData;
