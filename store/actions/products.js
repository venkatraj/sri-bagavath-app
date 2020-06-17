import { firebase, database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';
import Product from '../../models/Product';

const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const snapshot = await database.ref('products').once('value');

      // IMPORTANT: removing this because this doesn't known the difference
      // between non existing path and empty dataset
      // if (!snapshot.val()) {
      //   throw new Error("Can't read products from database!");
      // }

      const products = [];
      snapshot.forEach((childSnapshot) => {
        const {
          title,
          description,
          price,
          category,
          language,
          imageUrl,
        } = childSnapshot.val();
        const product = new Product(
          childSnapshot.key,
          title,
          description,
          price,
          category,
          language,
          imageUrl
        );
        products.push(product);
      });
      dispatch({ type: 'SET_PRODUCTS', products });
    } catch (e) {
      throw e;
    }
  };
};

const addProduct = (values, fileName, uri) => {
  return async (dispatch) => {
    const { title, description, price, category, language } = values;
    const path = 'products';
    let imageUrl;
    const mime = 'image/jpeg, images/png, image/gif, image/tiff';
    try {
      const blob = await uriToBlob(uri);
      const snapshot = await uploadToFirebase(blob, path, fileName, mime);
      imageUrl = await snapshot.ref.getDownloadURL();
      const res = await database.ref('products').push({
        title,
        description,
        price,
        category,
        language,
        imageUrl,
      });
      const product = new Product(
        res.key,
        title,
        description,
        price,
        category,
        language,
        imageUrl
      );

      dispatch({
        type: 'ADD_PRODUCT',
        product,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

const editProduct = (id, updates) => {
  return async (dispatch) => {
    const { title, description, price, category, language } = updates;
    await database.ref(`products/${id}`).update({
      title,
      description,
      price,
      category,
      language,
    });
    dispatch({
      type: 'EDIT_PRODUCT',
      id,
      updates,
    });
  };
};

const deleteProduct = (id) => {
  return async (dispatch) => {
    await database.ref(`products/${id}`).remove();
    dispatch({ type: 'DELETE_PRODUCT', id });
  };
};

export { fetchProducts, addProduct, editProduct, deleteProduct };
