const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.event];
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    default:
      return state;
  }
};

export default eventsReducer;
