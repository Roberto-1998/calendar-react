import React from 'react';
import { eventStartDelete } from '../../store/actions/eventsActions';
import { useDispatch } from 'react-redux';

const DeleteEventFab = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eventStartDelete());
  };

  return (
    <button className='btn btn-danger fab-danger' onClick={handleDelete}>
      <i className='fas fa-trash'></i>
      <span>Borrar evento</span>
    </button>
  );
};

export default DeleteEventFab;
