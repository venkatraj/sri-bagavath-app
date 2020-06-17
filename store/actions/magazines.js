import { database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';
import Magazine from '../../models/Magazine';

const fetchMagazines = () => {
  return async (dispatch) => {
    try {
      const snapshot = await database.ref('magazines').once('value');

      // IMPORTANT: removing this because this doesn't known the difference
      // between non existing path and empty dataset
      // if (!snapshot.val()) {
      //   throw new Error("Can't read magazines from database!");
      // }

      const magazines = [];
      snapshot.forEach((childSnapshot) => {
        const { date, fileName, downloadUrl } = childSnapshot.val();
        const magazine = new Magazine(
          childSnapshot.key,
          date,
          fileName,
          downloadUrl
        );
        magazines.push(magazine);
      });
      dispatch({ type: 'SET_MAGAZINES', magazines });
    } catch (e) {
      throw e;
    }
  };
};

const addMagazine = (values, fileName, uri) => {
  return async (dispatch) => {
    const { date } = values;
    const [day, month, year] = date.split('-');
    const path = `magazines/${year}/${month}`;
    let downloadUrl;
    try {
      const blob = await uriToBlob(uri);
      const snapshot = await uploadToFirebase(blob, path, fileName);
      downloadUrl = await snapshot.ref.getDownloadURL();
      const res = await database.ref('magazines').push({
        date,
        fileName,
        downloadUrl,
      });
      const magazine = new Magazine(res.key, date, fileName, downloadUrl);
      dispatch({
        type: 'ADD_MAGAZINE',
        magazine,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

const editMagazine = (id, updates) => {
  return async (dispatch) => {
    const { date } = updates;
    database.ref(`magazines/${id}`).update({ date });
    dispatch({
      type: 'EDIT_MAGAZINE',
      id,
      updates,
    });
  };
};

const deleteMagazine = (id) => {
  return async (dispatch) => {
    database.ref(`magazines/${id}`).remove();

    dispatch({
      type: 'DELETE_MAGAZINE',
      id,
    });
  };
};

export { fetchMagazines, addMagazine, editMagazine, deleteMagazine };
