import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checking: true,
  user: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.checking = false;
    },
    setCheckingEnd: (state) => {
      state.checking = false;
    },
    setLogout: (state) => {
      state.checking = false;
      state.user = null;
    },
  },
});

export const { setUser, setCheckingEnd, setLogout } = auth.actions;
export default auth.reducer;
