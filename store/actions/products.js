const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
};

const editProduct = (id, updates) => {
  return {
    type: 'EDIT_PRODUCT',
    id,
    updates,
  };
};

const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id,
  };
};

export { addProduct, editProduct, deleteProduct };
