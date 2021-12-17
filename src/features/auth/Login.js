import React, { useState } from 'react';
import { useLoginMutation } from '../../services/api/Query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from './authSlice';

function PasswordInput({ name, onChange }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <input
        type={show ? 'text' : 'password'}
        placeholder={'Enter Password'}
        name={name}
        onChange={onChange}
      />
      <button onClick={handleClick}>{show ? 'Hide' : 'Show'}</button>
    </>
  );
}

export const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login] = useLoginMutation();

  const handleChange = ({ target: { name, value } }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <label>
        email
        <input onChange={handleChange} type="text" name={'email'} placeholder={'Email'} />
      </label>
      <label>
        password
        <PasswordInput onChange={handleChange} name={'password'} />
      </label>
      <button
        onClick={async () => {
          try {
            const tokens = await login(formState).unwrap();
            dispatch(setCredentials(tokens));
            navigate('/');
          } catch (err) {
            console.log('error', err);
          }
        }}>
        Login
      </button>
    </>
  );
};

export default Login;
