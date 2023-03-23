import axios from 'axios';
import Swal from 'sweetalert2';

const baseURL = `${process.env.REACT_APP_URL_SERVER}/events`;

export const addEvent = async (eventValue) => {
  const config = {
    headers: {
      'x-token': localStorage.getItem('token') || '',
    },
  };

  try {
    const { data } = await axios.post(`${baseURL}`, eventValue, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = async () => {
  const config = {
    headers: {
      'x-token': localStorage.getItem('token') || '',
    },
  };

  try {
    const { data } = await axios.get(`${baseURL}`, config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = async (event) => {
  const config = {
    headers: {
      'x-token': localStorage.getItem('token') || '',
    },
  };

  try {
    const { data } = await axios.put(`${baseURL}/${event.id}`, event, config);
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire('Error', error.response.data.msg, 'error');
  }
};

export const deleteEvent = async (event) => {
  const config = {
    headers: {
      'x-token': localStorage.getItem('token') || '',
    },
  };

  try {
    const { data } = await axios.delete(`${baseURL}/${event.id}`, config);
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire('Error', error.response.data.msg, 'error');
  }
};
