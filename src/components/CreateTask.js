import React, { useState } from 'react';
import { useAddTaskMutation, useRefreshTokenMutation } from '../services/api/Query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentRefreshToken, setCredentials } from '../features/auth/authSlice';

const CreateTask = () => {
  const [createTask] = useAddTaskMutation();
  const [title, setTitle] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const dispatch = useDispatch();
  const refreshToken = useSelector(selectCurrentRefreshToken);
  const [attemptRefreshToken] = useRefreshTokenMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
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
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={'flex flex-row justify-between mb-4'}>
          <div className={'w-2/3'}>
            <input
              className={
                'w-full bg-neutral-100 focus:text-neutral-900 rounded-md dark:bg-neutral-600 focus:bg-neutral-50 p-2 focus:outline focus:outline-offset-2 focus:outline-neutral-500 placeholder-neutral-400 placeholder-p-4'
              }
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button
            className={
              'dark:text-neutral-200 dark:bg-neutral-700 shadow-neutral-200 bg-neutral-100 dark:shadow-neutral-600 px-4 py-2 rounded-lg shadow-lg'
            }
            type="submit">
            Create
          </button>
        </div>
      </form>

      <div
        className={`bg-neutral-100 dark:bg-neutral-900 mx-auto rounded-lg py-2 w-full flex justify-center ${
          isEmpty ? '' : 'hidden'
        }`}>
        <p>Error you can't create empty task</p>
      </div>
    </>
  );
};

export default CreateTask;
