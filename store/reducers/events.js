const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.event];
    case 'EDIT_EVENT':
      const { name, host, venue, price, date } = action.updates;
      return state.map((event) => {
        if (event.id !== action.id) return event;
        event.name = name;
        event.host = host;
        event.venue = venue;
        event.price = price;
        event.date = date;
        return event;
      });
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    default:
      return state;
  }
};

export default eventsReducer;
