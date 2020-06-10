const addEBook = (ebook) => {
  return {
    type: 'ADD_EBOOK',
    ebook,
  };
};

export { addEBook };
