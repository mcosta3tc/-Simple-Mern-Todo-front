import GetTasks from './GetTasks';
import React from 'react';
import CreateTask from './CreateTask';

function Home() {
  return (
    <>
      <GetTasks />
      <CreateTask />
    </>
  );
}

export default Home;
