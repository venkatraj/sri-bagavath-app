import { database } from '../../firebase/firebase';

const addEBook = (ebook) => {
  return async (dispatch) => {
    await database.ref('ebooks').push(ebook);
    dispatch({
      type: 'ADD_EBOOK',
      ebook,
    });
  };
};

const deleteEBook = (id) => {
  return {
    type: 'DELETE_EBOOK',
    id,
  };
};

export { addEBook, deleteEBook };
