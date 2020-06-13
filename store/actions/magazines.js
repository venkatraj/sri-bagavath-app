import { database } from '../../firebase/firebase';

const addMagazine = (magazine) => {
  return async (dispatch) => {
    await database.ref('magazines').push(magazine);
    dispatch({
      type: 'ADD_MAGAZINE',
      magazine,
    });
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

export { addMagazine, editMagazine, deleteMagazine };
