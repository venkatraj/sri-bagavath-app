const getProduct = (id, products) => {
  return products.find((product) => product.id === id);
};

export default getProduct;
