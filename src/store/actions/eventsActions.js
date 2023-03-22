import { setActiveEvent, setClearActiveEvent, setEventDelete, setNewEvent, setUpdateEvent } from '../slices/events';

export const addActiveEvent = (event) => (dispatch) => {
  dispatch(setActiveEvent(event));
};

export const addNewEvent = (event) => (dispatch) => {
  dispatch(setNewEvent(event));
};

export const clearActiveEvent = () => (dispatch) => {
  dispatch(setClearActiveEvent());
};

export const updateEvent = (e) => (dispatch) => {
  dispatch(setUpdateEvent(e));
};

export const deleteEvent = () => (dispatch) => {
  dispatch(setEventDelete());
};
