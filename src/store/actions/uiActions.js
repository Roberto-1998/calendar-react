import { setCloseModal, setOpenModal } from '../slices/ui';

export const closeFormModal = () => (dispatch) => {
  dispatch(setCloseModal());
};

export const openFormModal = () => (dispatch) => {
  dispatch(setOpenModal());
};
