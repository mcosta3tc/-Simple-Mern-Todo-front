import GetTasks from './GetTasks';
import React from 'react';
import CreateTask from './CreateTask';
import Counter from '../features/counter/Counter';

function Home() {
  return (
    <>
      <GetTasks />
      <CreateTask />
      <Counter />
    </>
  );
}

export default Home;
