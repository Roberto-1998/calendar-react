import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
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
    setLoadEvents: (state, { payload }) => {
      state.events = payload;
    },
    setLogoutEvents: (state) => {
      state.activeEvent = null;
      state.events = [];
    },
  },
});

export const {
  setActiveEvent,
  setNewEvent,
  setClearActiveEvent,
  setUpdateEvent,
  setEventDelete,
  setLoadEvents,
  setLogoutEvents,
} = events.actions;
export default events.reducer;
