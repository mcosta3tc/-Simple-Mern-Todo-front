import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

export const PrivateRoute = ({ children }) => {
  const userId = useSelector(selectCurrentUser);

  return <>{userId ? [children] : <Navigate to={'/login'} />}</>;
};
