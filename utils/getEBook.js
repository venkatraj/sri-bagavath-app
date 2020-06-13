const getEBook = (id, ebooks) => {
  return ebooks.find((ebook) => ebook.id === id);
};

export default getEBook;
