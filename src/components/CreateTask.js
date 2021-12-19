import React, { useEffect, useState } from 'react';
import { useAddTaskMutation, useRefreshTokenMutation } from '../services/api/Query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAccessToken, setCredentials } from '../features/auth/authSlice';

const CreateTask = () => {
  const [createTask, error] = useAddTaskMutation();
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const accessToken = useSelector(selectCurrentAccessToken);
  const [attemptRefreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    async function refreshToken() {
      if (error && error.status === 401) {
        console.log('401');
        await attemptRefreshToken()
          .then((response) => {
            console.log('success');
            dispatch(setCredentials(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    try {
      refreshToken();
    } catch (e) {
      console.log(e);
    }
  }, [attemptRefreshToken, dispatch, error, accessToken]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTask({ title }, accessToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Task
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTask;
