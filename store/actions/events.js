const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    event,
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
