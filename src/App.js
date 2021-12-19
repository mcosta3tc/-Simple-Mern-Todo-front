import './App.css';
import Login from './features/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import NotFound from './components/NotFound';
import GetTasks from './components/GetTasks';
import CreateTask from './components/CreateTask';
import Logout from './features/auth/Logout';
import { useSelector } from 'react-redux';
import { selectCurrentAccessToken } from './features/auth/authSlice';
import { useEffect } from 'react';

function App() {
  const accessToken = useSelector(selectCurrentAccessToken);
  useEffect(() => {
    return () => {
      console.log('je suis fais, from home', accessToken);
    };
  }, [accessToken]);

  return (
    <Routes>
      <Route exact path={'/login'} element={<Login />} />
      <Route
        path={'/'}
        element={
          <PrivateRoute>
            <CreateTask />
            <GetTasks />
            <Logout />
          </PrivateRoute>
        }
      />

      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;
