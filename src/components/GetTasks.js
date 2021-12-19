import React, { useEffect } from 'react';
import { useTaskQuery } from '../services/api/Query';
import { useSelector } from 'react-redux';
import { selectCurrentAccessToken } from '../features/auth/authSlice';
import DeleteTask from './DeleteTask';

const GetTasks = () => {
  /*  const [deleteTask] = useDeleteTaskMutation();
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
  }, [attemptRefreshToken, dispatch, error, data, accessToken]);*/
  //const [deleteTask] = useDeleteTaskMutation();
  //let { data } = useTaskQuery();
  //let [taskRefresh, { data, isLoading, error }] = useTaskRefreshMutation();

  const accessToken = useSelector(selectCurrentAccessToken);

  const { data, error, status } = useTaskQuery();

  useEffect(() => {}, [accessToken, data]);

  return (
    <>
      {data?.map((task) => (
        <div
          className="container border-2 border-black bg-white mx-auto my-2 rounded-lg p-4 shadow-md flex justify-between"
          key={`li-${task._id}`}>
          <div className="border-2 border-black text-lg basis-2/3 flex items-center pl-2">
            {task.title}
          </div>
          <DeleteTask taskId={task._id} />
        </div>
      ))}
    </>
  );
};

export default GetTasks;
