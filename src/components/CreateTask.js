import React, { useState } from 'react';
import { useAddTaskMutation, useRefreshTokenMutation } from '../services/api/Query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentRefreshToken, setCredentials } from '../features/auth/authSlice';

const CreateTask = () => {
  const [createTask] = useAddTaskMutation();
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const refreshToken = useSelector(selectCurrentRefreshToken);
  const [attemptRefreshToken] = useRefreshTokenMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTask({ title })
      .then(async (response) => {
        if (response.error.status === 401) {
          await attemptRefreshToken({ refreshToken })
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
