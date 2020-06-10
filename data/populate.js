import { EVENTS, MAGAZINES, EBOOKS, PRODUCTS } from './dummy-data';
import { addEvent } from '../store/actions/events';
import { addMagazine } from '../store/actions/magazines';
import { addEBook } from '../store/actions/ebooks';
import { addProduct } from '../store/actions/products';

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

  PRODUCTS.forEach((product) => {
    store.dispatch(addProduct(product));
  });
};

export default populateData;
