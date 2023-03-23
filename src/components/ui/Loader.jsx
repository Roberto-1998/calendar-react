import React from 'react';
import { ClockLoader } from 'react-spinners';

const override = {
  position: 'fixed',
  top: '20px',
  right: '0',
  left: '0',
  margin: '50px auto',
  borderColor: 'red',
};

const Loader = () => {
  return <ClockLoader color='#0062CD' cssOverride={override} />;
};

export default Loader;
