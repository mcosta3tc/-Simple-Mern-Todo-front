import GetTasks from './GetTasks';
import React from 'react';
import CreateTask from './CreateTask';

function DashBoard() {
  return (
    <div className="bg-gray-200 p-4 h-screen grid justify-items-center content-start mx-auto">
      <CreateTask />
      <GetTasks />
    </div>
  );
}

export default DashBoard;
