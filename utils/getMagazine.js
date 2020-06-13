const getMagazine = (id, magazines) => {
  return magazines.find((magazine) => magazine.id === id);
};

export default getMagazine;
