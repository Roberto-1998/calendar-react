import React from 'react';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutEvents } from '../../store/actions/eventsActions';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(logoutEvents());
    navigate('/login');
  };

  return (
    <div className='navbar navbar-dark bg-dark mb-4 pr-4 px-3'>
      <span className='navbar-brand'>{user.name}</span>

      <button className='btn btn-outline-danger' onClick={handleLogout}>
        <i className='fas fa-sign-out-alt'></i>
        <span> Salir</span>
      </button>
    </div>
  );
};

export default Navbar;
