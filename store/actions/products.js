import { database } from '../../firebase/firebase';

const addProduct = (product) => {
  return async (dispatch) => {
    await database.ref('products').push(product);
    dispatch({
      type: 'ADD_PRODUCT',
      product,
    });
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
