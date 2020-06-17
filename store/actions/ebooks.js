import { database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';
import EBook from '../../models/EBook';

const fetchEBooks = () => {
  return async (dispatch) => {
    try {
      const snapshot = await database.ref('ebooks').once('value');

      if (!snapshot.val()) {
        throw new Error("Can't read ebooks from database!");
      }

      const ebooks = [];
      snapshot.forEach((childSnapshot) => {
        const {
          title,
          description,
          fileName,
          downloadUrl,
        } = childSnapshot.val();
        const ebook = new EBook(
          childSnapshot.key,
          title,
          description,
          fileName,
          downloadUrl
        );
        ebooks.push(ebook);
      });
      dispatch({ type: 'SET_EBOOKS', ebooks });
    } catch (e) {
      throw e;
    }
  };
};

const addEBook = (values, fileName, uri) => {
  return async (dispatch) => {
    const { title, description } = values;
    let downloadUrl;
    try {
      const blob = await uriToBlob(uri);
      const snapshot = await uploadToFirebase(blob, 'ebooks', fileName);
      downloadUrl = await snapshot.ref.getDownloadURL();
      const res = await database.ref('ebooks').push({
        title,
        description,
        fileName,
        downloadUrl,
      });
      const ebook = new EBook(
        res.key,
        title,
        description,
        fileName,
        downloadUrl
      );
      dispatch({
        type: 'ADD_EBOOK',
        ebook,
      });
    } catch (e) {
      console.error(e);
    }
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

export { fetchEBooks, addEBook, editEBook, deleteEBook };
