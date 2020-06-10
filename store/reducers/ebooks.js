const ebooksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EBOOK':
      return [...state, action.ebook];
    default:
      return state;
  }
};

export default ebooksReducer;
