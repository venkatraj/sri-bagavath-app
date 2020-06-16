const ebooksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_EBOOKS':
      return action.ebooks;
    case 'ADD_EBOOK':
      return [...state, action.ebook];
    case 'DELETE_EBOOK':
      return state.filter((ebook) => ebook.id !== action.id);
    default:
      return state;
  }
};

export default ebooksReducer;
