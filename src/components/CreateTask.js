import React, { useState } from 'react';
import { useAddTaskMutation, useRefreshTokenMutation } from '../services/api/Query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAccessToken, setCredentials } from '../features/auth/authSlice';

const CreateTask = () => {
  const [createTask] = useAddTaskMutation();
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const accessToken = useSelector(selectCurrentAccessToken);
  const [attemptRefreshToken] = useRefreshTokenMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTask({ title }, accessToken)
      .then(async (response) => {
        if (response.error.status === 401) {
          await attemptRefreshToken()
            .then((response) => {
              dispatch(setCredentials(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log('error', error.error);
      });
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
