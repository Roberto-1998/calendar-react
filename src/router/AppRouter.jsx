import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from '../store/actions/authActions';
import Loader from '../components/ui/Loader';

const LoginLazy = lazy(() => import('../components/auth/LoginScreen'));
const CalendarLazy = lazy(() => import('../components/calendar/CalendarScreen'));

const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  if (checking) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/login' element={!user ? <LoginLazy /> : <Navigate to={'/'} />} />
        <Route path='/' element={user ? <CalendarLazy /> : <Navigate to={'/login'} />} />
        <Route path='*' element={<Navigate to={'/'} />} />
        <Route />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
