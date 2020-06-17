const productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.products;
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'EDIT_PRODUCT':
      const { title, description, price, category } = action.updates;
      const updatedState = state.map((product) => {
        if (product.id !== action.id) return product;
        product.title = title;
        product.description = description;
        product.price = price;
        product.category = category;
        return product;
      });
      return updatedState;
    case 'DELETE_PRODUCT':
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};

export default productsReducer;
