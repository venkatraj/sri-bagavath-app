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

const editEBook = (id, updates) => {
  return {
    type: 'EDIT_EBOOK',
    id,
    updates,
  };
};

const deleteEBook = (id) => {
  return {
    type: 'DELETE_EBOOK',
    id,
  };
};

export { addEBook, editEBook, deleteEBook };
