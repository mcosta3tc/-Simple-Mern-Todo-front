import './App.css';
import Login from './features/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';
import NotFound from './components/NotFound';
import Home from './components/Home';

function App() {
  console.log('test deploy');
  return (
    <Routes>
      <Route exact path={'/login'} element={<Login />} />
      <Route
        path={'/'}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
}

export default App;
