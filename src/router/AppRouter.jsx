import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../store/actions/authActions';

const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Routes>
      <Route path='/login' element={!user ? <LoginScreen /> : <Navigate to={'/'} />} />
      <Route path='/' element={user ? <CalendarScreen /> : <Navigate to={'/login'} />} />
      <Route path='*' element={<Navigate to={'/'} />} />
      <Route />
    </Routes>
  );
};

export default AppRouter;
