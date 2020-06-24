import { database } from '../../firebase/firebase';
import Event from '../../models/Event';

const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const snapshot = await database.ref('events').once('value');

      // IMPORTANT: removing this because this doesn't known the difference
      // between non existing path and empty dataset
      // if (!snapshot.val()) {
      //   throw new Error("Can't read events from database!");
      // }

      const events = [];
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
    } catch (e) {
      throw e;
    }
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
  return async (dispatch) => {
    const {
      title,
      description,
      host,
      venue,
      price,
      startDate,
      endDate,
    } = updates;
    await database.ref(`events/${id}`).update({
      title,
      description,
      host,
      venue,
      price,
      startDate,
      endDate,
    });

    dispatch({
      type: 'EDIT_EVENT',
      id,
      updates,
    });
  };
};

const deleteEvent = (id) => {
  return async (dispatch) => {
    await database.ref(`events/${id}`).remove();

    dispatch({
      type: 'DELETE_EVENT',
      id,
    });
  };
};

export { fetchEvents, addEvent, editEvent, deleteEvent };
