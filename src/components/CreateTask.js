import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = process.env.REACT_APP_URL + process.env.REACT_APP_TASKS;
      await axios.post(url, { title });
    } catch (error) {
      console.log(error);
    }
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
