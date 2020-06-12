const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
};

const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id,
  };
};

export { addProduct, deleteProduct };
