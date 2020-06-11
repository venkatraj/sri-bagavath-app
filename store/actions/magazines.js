const addMagazine = (magazine) => {
  return {
    type: 'ADD_MAGAZINE',
    magazine,
  };
};

const deleteMagazine = (id) => {
  return {
    type: 'DELETE_MAGAZINE',
    id,
  };
};

export { addMagazine, deleteMagazine };
