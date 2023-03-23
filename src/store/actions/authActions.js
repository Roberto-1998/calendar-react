import { setLogout, setUser } from '../slices/auth';
import { check, login, register } from '../../services/auth.service';
import Swal from 'sweetalert2';

export const loginUser = (email, password) => async (dispatch) => {
  const response = await login(email, password);

  if (response.ok) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('token-init-data', new Date().getTime());
    dispatch(
      setUser({
        uid: response.uid,
        name: response.name,
      })
    );
  } else {
    alert('Hola');
    Swal.fire('Error', response.msg, 'error');
  }
};

export const registerUser = (email, password, name) => async (dispatch) => {
  const response = await register(email, password, name);

  if (response.ok) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('token-init-data', new Date().getTime());
    dispatch(
      setUser({
        uid: response.uid,
        name: response.name,
      })
    );
  }
};

export const checkUser = () => async (dispatch) => {
  const response = await check(dispatch);
  if (response.ok) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('token-init-data', new Date().getTime());
    dispatch(
      setUser({
        uid: response.uid,
        name: response.name,
      })
    );
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('token-init-data');
  dispatch(setLogout());
};
