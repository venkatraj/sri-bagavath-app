const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product,
  };
};

export { addProduct };
