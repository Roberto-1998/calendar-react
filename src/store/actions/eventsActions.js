import { prepareEvents } from '../../helpers/prepareEvents';
import { addEvent, deleteEvent, getEvents, updateEvent } from '../../services/events.service';
import {
  setActiveEvent,
  setClearActiveEvent,
  setEventDelete,
  setLoadEvents,
  setLogoutEvents,
  setNewEvent,
  setUpdateEvent,
} from '../slices/events';

export const addActiveEvent = (event) => (dispatch) => {
  dispatch(setActiveEvent(event));
};

export const eventStartAddNew = (event) => async (dispatch, getState) => {
  const {
    auth: { user },
  } = getState();

  const { uid, name } = user;

  const response = await addEvent(event);

  if (response.ok) {
    event.id = response.event.id;
    event.user = {
      _id: uid,
      name,
    };
    dispatch(addNewEvent(event));
  }
};

const addNewEvent = (event) => (dispatch) => {
  dispatch(setNewEvent(event));
};

export const eventStartLoading = () => async (dispatch) => {
  const response = await getEvents();

  if (response.ok) {
    const events = prepareEvents(response.events);
    dispatch(setLoadEvents(events));
  }
};

export const clearActiveEvent = () => (dispatch) => {
  dispatch(setClearActiveEvent());
};

export const eventStartUpdate = (event) => async (dispatch) => {
  const response = await updateEvent(event);
  if (response.ok) {
    dispatch(setUpdateEvent(event));
  }
};

export const eventStartDelete = () => async (dispatch, getState) => {
  const {
    events: { activeEvent },
  } = getState();

  const response = await deleteEvent(activeEvent);
  if (response.ok) {
    dispatch(setEventDelete());
  }
};

export const logoutEvents = () => (dispatch) => {
  dispatch(setLogoutEvents());
};
