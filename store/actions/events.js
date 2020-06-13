import { database } from '../../firebase/firebase';
const addEvent = (event) => {
  return async (dispatch) => {
    await database.ref('events').push(event);

    dispatch({
      type: 'ADD_EVENT',
      event,
    });
  };
};

const editEvent = (id, updates) => {
  return {
    type: 'EDIT_EVENT',
    id,
    updates,
  };
};

const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id,
  };
};

export { addEvent, editEvent, deleteEvent };
