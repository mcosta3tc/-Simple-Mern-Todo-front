import React from 'react';
import { useDeleteTaskMutation, useTaskQuery } from '../services/api/taskSlice';

const GetTasks = () => {
  const { data } = useTaskQuery();
  const [deleteTask] = useDeleteTaskMutation();
  return (
    <>
      <ul>
        {data?.map((task) => (
          <>
            <li key={'li-' + task._id}>{task.title}</li>
            <button key={'btn-' + task._id} onClick={() => deleteTask(task._id)}>
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};

export default GetTasks;
