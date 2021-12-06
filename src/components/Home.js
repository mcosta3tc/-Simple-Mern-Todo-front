import React, { useState, useEffect } from 'react';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch(process.env.REACT_APP_URL + process.env.REACT_APP_TASKS)
          .then((response) => response.json())
          .catch((error) => console.log(error));
        setTasks(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [setTasks]);

  return (
    <ul>
      {tasks.map((element) => {
        return <li key={element._id}>{element.title}</li>;
      })}
    </ul>
  );
}

export default Home;
