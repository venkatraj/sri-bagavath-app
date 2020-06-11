const magazinesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MAGAZINE':
      return [...state, action.magazine];
    case 'DELETE_MAGAZINE':
      return state.filter((magazine) => magazine.id !== action.id);
    default:
      return state;
  }
};

export default magazinesReducer;
