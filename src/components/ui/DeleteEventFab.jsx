import React from 'react';
import { deleteEvent } from '../../store/actions/eventsActions';
import { useDispatch } from 'react-redux';

const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEvent());
  };

  return (
    <button className='btn btn-danger fab-danger' onClick={handleDelete}>
      <i className='fas fa-trash'></i>
      <span>Borrar evento</span>
    </button>
  );
};

export default DeleteEventFab;
