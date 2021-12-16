import './App.css';
import React from 'react';
import Login from './features/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import { ProtectedComponent } from './features/auth/ProtectedComponent';

function App() {
  return (
    <Routes>
      <Route exact path={'/login'} element={<Login />} />
      <Route
        path={'/'}
        element={
          <PrivateRoute>
            <ProtectedComponent />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
