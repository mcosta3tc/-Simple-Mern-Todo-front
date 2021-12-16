import './App.css';
import React from 'react';
import Login from './features/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import GetTasks from './components/GetTasks';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path={'/login'} element={<Login />} />
      <Route
        path={'/'}
        element={
          <PrivateRoute>
            <GetTasks />
          </PrivateRoute>
        }
      />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;
