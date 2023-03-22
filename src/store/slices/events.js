import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title: 'Cumpleaños del jefe',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
      user: {
        _id: '123',
        name: 'Roberto',
      },
    },
  ],
  activeEvent: null,
};

const events = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    setNewEvent: (state, { payload }) => {
      state.events = [...state.events, payload];
    },
    setClearActiveEvent: (state) => {
      state.activeEvent = null;
    },

    setUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((e) => (e.id === payload.id ? payload : e));
    },
    setEventDelete: (state) => {
      state.events = state.events.filter((e) => e.id !== state.activeEvent.id);
      state.activeEvent = null;
    },
  },
});

export const { setActiveEvent, setNewEvent, setClearActiveEvent, setUpdateEvent, setEventDelete } = events.actions;
export default events.reducer;
