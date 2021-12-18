import React, { useEffect } from 'react';
import {
  useDeleteTaskMutation,
  useRefreshTokenMutation,
  useTaskQuery
} from '../services/api/Query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentAccessToken, setCredentials } from '../features/auth/authSlice';

const GetTasks = () => {
  const [deleteTask] = useDeleteTaskMutation();
  const dispatch = useDispatch();
  const accessToken = useSelector(selectCurrentAccessToken);
  const { data, error } = useTaskQuery();
  const [attemptRefreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    async function refreshToken() {
      if (error && error.status === 401) {
        await attemptRefreshToken()
          .then((response) => {
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
  }, [attemptRefreshToken, dispatch, error, data, accessToken]);

  return (
    <>
      {data?.map((task) => (
        <div
          className="container border-2 border-black bg-white mx-auto my-2 rounded-lg p-4 shadow-md flex justify-between"
          key={`li-${task._id}`}>
          <div className="border-2 border-black text-lg basis-2/3 flex items-center pl-2">
            {task.title}
          </div>
          <button
            className="px-4 py-2 rounded-lg bg-red-500 text-red-200 shadow-md hover:shadow-inner hover:bg-red-600 hover:text-red-100"
            onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default GetTasks;
