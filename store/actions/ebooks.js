const addEBook = (ebook) => {
  return {
    type: 'ADD_EBOOK',
    ebook,
  };
};

const deleteEBook = (id) => {
  return {
    type: 'DELETE_EBOOK',
    id,
  };
};

export { addEBook, deleteEBook };
