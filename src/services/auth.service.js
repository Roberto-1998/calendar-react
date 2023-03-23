import axios from 'axios';
import Swal from 'sweetalert2';
import { setCheckingEnd } from '../store/slices/auth';

const baseURL = `${process.env.REACT_APP_URL_SERVER}/auth`;

export const login = async (email, password) => {
  try {
    const { data } = await axios.post(baseURL, { email, password });

    return data;
  } catch (error) {
    console.log(error);
    Swal.fire('Error', error.response.data.msg, 'error');
  }
};

export const register = async (email, password, name) => {
  try {
    const { data } = await axios.post(`${baseURL}/new`, { email, password, name });
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire('Error', error.response.data.msg, 'error');
  }
};

export const check = async (dispatch) => {
  const config = {
    headers: {
      'x-token': localStorage.getItem('token') || '',
    },
  };

  try {
    const { data } = await axios.get(`${baseURL}/renew`, config);
    return data;
  } catch (error) {
    dispatch(setCheckingEnd());
    console.log(error);
  }
};
