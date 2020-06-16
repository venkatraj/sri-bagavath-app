import { database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';
import EBook from '../../models/EBook';

const fetchEBooks = () => {
  return async (dispatch) => {
    const ebooks = [];
    database.ref('ebooks').once('value', (snapshot) => {
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
    });
  };
};

const addEBook = (values, fileName, uri) => {
  return async (dispatch) => {
    let downloadUrl;
    try {
      const blob = await uriToBlob(uri);
      const snapshot = await uploadToFirebase(blob, fileName);
      downloadUrl = await snapshot.ref.getDownloadURL();
      await database.ref('ebooks').push(ebook);
    } catch (e) {
      console.error(e);
    }
    const res = await database.ref('ebooks').push(ebook);

    const ebook = new EBook(res.key, ...values, fileName, downloadUrl);
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

export { fetchEBooks, addEBook, editEBook, deleteEBook };
