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

  const { data } = useTaskQuery();

  useEffect(() => {}, [accessToken, data]);

  return (
    <>
      {data?.map((task) => (
        <>
          <div
            className="bg-neutral-100 dark:bg-neutral-900 mx-auto mb-4 rounded-lg p-4 flex justify-between items-center"
            key={`li-${task._id}`}>
            <div className="dark:text-neutral-200 flex items-center w-2/3">
              <p className={'break-all'}>{task.title}</p>
            </div>
            <DeleteTask taskId={task._id} />
          </div>
        </>
      ))}
    </>
  );
};

export default GetTasks;
