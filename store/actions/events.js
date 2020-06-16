import { database } from '../../firebase/firebase';
import Event from '../../models/Event';

const fetchEvents = () => {
  return async (dispatch) => {
    const events = [];
    database.ref('events').once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const {
          title,
          description,
          host,
          venue,
          price,
          startDate,
          endDate,
        } = childSnapshot.val();
        const event = new Event(
          childSnapshot.key,
          title,
          description,
          host,
          venue,
          price,
          startDate,
          endDate
        );
        events.push(event);
      });
      dispatch({ type: 'SET_EVENTS', events });
    });
  };
};

const addEvent = (values) => {
  return async (dispatch) => {
    const {
      title,
      description,
      host,
      venue,
      price,
      startDate,
      endDate,
    } = values;
    try {
      const res = await database.ref('events').push({
        title,
        description,
        host,
        venue,
        price,
        startDate,
        endDate,
      });

      const event = new Event(
        res.key,
        title,
        description,
        host,
        venue,
        price,
        startDate,
        endDate
      );

      dispatch({
        type: 'ADD_EVENT',
        event,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

const editEvent = (id, updates) => {
  return {
    type: 'EDIT_EVENT',
    id,
    updates,
  };
};

const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id,
  };
};

export { fetchEvents, addEvent, editEvent, deleteEvent };
