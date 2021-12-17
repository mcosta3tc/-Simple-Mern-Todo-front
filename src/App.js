import './App.css';
import React, { useEffect } from 'react';
import Login from './features/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import NotFound from './components/NotFound';
import { ProtectedComponent } from './features/auth/ProtectedComponent';
import { useSelector } from 'react-redux';
import { selectCurrentAccessToken } from './features/auth/authSlice';

function App() {
  const accessToken = useSelector(selectCurrentAccessToken);
  useEffect(() => {
    console.log('APP useEffect', accessToken);
  }, [accessToken]);

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
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;
