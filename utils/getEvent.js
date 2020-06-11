const getEvent = (id, events) => {
  return events.find((event) => event.id === id);
};

export default getEvent;
