import './App.css';
import React from 'react';
import CreateTask from './components/CreateTask';
import GetTasks from './components/GetTasks';

function App() {
  return (
    <div className="bg-gray-200 p-4 h-screen grid justify-items-center content-start mx-auto">
      <CreateTask />
      <GetTasks />
    </div>
  );
}

export default App;
