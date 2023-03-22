import React from 'react';
import { useDispatch } from 'react-redux';
import { openFormModal } from '../../store/actions/uiActions';

const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openFormModal());
  };

  return (
    <button className='btn btn-primary fab' onClick={handleModal}>
      <i className='fas fa-plus'></i>
    </button>
  );
};

export default AddNewFab;
