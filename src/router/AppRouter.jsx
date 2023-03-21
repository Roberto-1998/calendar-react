import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/' element={<CalendarScreen />} />
      <Route path='*' element={<Navigate to={'/'} />} />
      <Route />
    </Routes>
  );
};

export default AppRouter;
