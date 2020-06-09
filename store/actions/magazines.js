const addMagazine = (magazine) => {
  return {
    type: 'ADD_MAGAZINE',
    magazine,
  };
};

export { addMagazine };
