import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetTasks = () => {
  const [tasks, setTasks] = useState([]);
  const url = process.env.REACT_APP_URL + process.env.REACT_APP_TASKS;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(url)
          .then((response) => {
            const data = response.data;
            setTasks(data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [url]);

  const deleteTask = async (e, taskId) => {
    e.preventDefault();
    try {
      await axios.delete(url + `${taskId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ul>
        {tasks.map((element) => (
          <li key={`li-${element._id}`} id={element._id}>
            {element.title}
            <button
              onClick={(e) => {
                deleteTask(e, element._id);
              }}>
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetTasks;
