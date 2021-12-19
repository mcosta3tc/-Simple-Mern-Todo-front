import React from 'react';
import CreateTask from './CreateTask';
import GetTasks from './GetTasks';
import Logout from '../features/auth/Logout';

function Home() {
  return (
    <div className={'flex justify-center bg-neutral-900'}>
      <div
        className={
          'w-full md:w-2/3 md:container md:rounded-lg md:my-8 md:px-4 md:mx-6 h-screen bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-800 h-screen flex text-neutral-600 dark:text-neutral-400 flex-col overflow-auto'
        }>
        <div className={'mt-2 md:pl-4'}>
          <Logout />
        </div>
        <div className={'flex flex-col p-2 py-4  w-full md:w-3/4 mx-auto mb-4'}>
          <CreateTask />
        </div>
        <div className={'mx-auto mx-2'}>
          <GetTasks />
        </div>
      </div>
    </div>
  );
}

export default Home;
