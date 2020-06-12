const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'DELETE_PRODUCT':
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};

export default productsReducer;
