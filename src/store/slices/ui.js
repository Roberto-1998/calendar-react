import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.modalOpen = true;
    },

    setCloseModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { setOpenModal, setCloseModal } = uiSlice.actions;
export default uiSlice.reducer;
