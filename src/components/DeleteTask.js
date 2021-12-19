import React from 'react';
import { useDeleteTaskMutation } from '../services/api/Query';

const DeleteTask = (props) => {
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = async (id) => {
    await deleteTask(id)
      .then(async (response) => {
        /*if (response.error.status === 401) {
          await attemptRefreshToken({ refreshToken })
            .then((response) => {
              dispatch(selectCurrentAccessToken({ accessToken: response.data.accessToken }));
            })
            .catch((error) => {
              console.log(error);
            });
        }*/
      })
      .catch((error) => {
        console.log('error', error.error);
      });
  };
  return (
    <button
      className="dark:text-neutral-200 dark:bg-neutral-700 shadow-neutral-200 bg-neutral-100 dark:shadow-neutral-600 px-4 py-2 rounded-lg shadow-sm h-1/2"
      onClick={(e) => {
        e.preventDefault();
        handleDeleteTask(props.taskId);
      }}>
      Delete
    </button>
  );
};

export default DeleteTask;
