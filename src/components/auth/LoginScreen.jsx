import React from 'react';
import './login.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../../store/actions/authActions';
import Swal from 'sweetalert2';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({});

  const [formRegisterValues, handleRegisterInputChange] = useForm({});

  const { lEmail, lPassword } = formLoginValues;
  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser(lEmail, lPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword1 !== rPassword2) {
      return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
    }
    dispatch(registerUser(rEmail, rPassword1, rName));
  };

  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-6 login-form-1'>
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className='form-group mb-2'>
              <input
                type='email'
                className='form-control'
                placeholder='Correo'
                name='lEmail'
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Contraseña'
                name='lPassword'
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input type='submit' className='btnSubmit' value='Login' />
            </div>
          </form>
        </div>

        <div className='col-md-6 login-form-2'>
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className='form-group mb-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Nombre'
                name='rName'
                value={rName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='email'
                className='form-control'
                placeholder='Correo'
                value={rEmail}
                name='rEmail'
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Contraseña'
                value={rPassword1}
                name='rPassword1'
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input
                type='password'
                name='rPassword2'
                value={rPassword2}
                className='form-control'
                placeholder='Repita la contraseña'
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input type='submit' className='btnSubmit' value='Crear cuenta' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
