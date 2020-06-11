const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    event,
  };
};

const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id,
  };
};

export { addEvent, deleteEvent };
