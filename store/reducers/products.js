const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    default:
      return state;
  }
};

export default productsReducer;
