import { database } from '../../firebase/firebase';
import uriToBlob from '../../utils/uriToBlob';
import uploadToFirebase from '../../utils/uploadToFirebase';
import Product from '../../models/Product';

const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const products = [];
      database.ref('products').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const {
            title,
            description,
            price,
            category,
            language,
            fileName,
            downloadUrl,
          } = childSnapshot.val();
          const product = new Product(
            childSnapshot.key,
            title,
            description,
            price,
            category,
            language,
            downloadUrl
          );
          products.push(product);
        });
        dispatch({ type: 'SET_PRODUCTS', products });
      });
    } catch (e) {
      // may be send error crash report
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

export { fetchProducts, addProduct, editProduct, deleteProduct };
