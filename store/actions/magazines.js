import { database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';
import Magazine from '../../models/Magazine';

const fetchMagazines = () => {
  return async (dispatch) => {
    const magazines = [];
    database.ref('magazines').once('value', (snapshot) => {
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
    });
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
  return {
    type: 'EDIT_MAGAZINE',
    id,
    updates,
  };
};

const deleteMagazine = (id) => {
  return {
    type: 'DELETE_MAGAZINE',
    id,
  };
};

export { fetchMagazines, addMagazine, editMagazine, deleteMagazine };
