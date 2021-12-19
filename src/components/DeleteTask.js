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
      className="px-4 py-2 rounded-lg bg-red-500 text-red-200 shadow-md hover:shadow-inner hover:bg-red-600 hover:text-red-100"
      onClick={(e) => {
        e.preventDefault();
        handleDeleteTask(props.taskId);
      }}>
      Delete
    </button>
  );
};

export default DeleteTask;
