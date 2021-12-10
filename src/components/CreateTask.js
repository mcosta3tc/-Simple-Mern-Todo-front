import React, { useState } from 'react';
import { useAddTaskMutation } from '../services/api/taskSlice';

const CreateTask = () => {
  const [createTask] = useAddTaskMutation();

  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createTask({ title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Task
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default CreateTask;
