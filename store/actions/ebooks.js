import { database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';

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
    const ebook = {
      ...values,
      fileName,
      downloadUrl,
    };
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
