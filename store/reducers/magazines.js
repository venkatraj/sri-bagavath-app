const magazinesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MAGAZINE':
      return [...state, action.magazine];
    default:
      return state;
  }
};

export default magazinesReducer;
