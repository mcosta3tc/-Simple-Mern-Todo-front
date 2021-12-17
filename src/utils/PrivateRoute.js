import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentAccessToken } from '../features/auth/authSlice';

export const PrivateRoute = ({ children }) => {
  const accessToken = useSelector(selectCurrentAccessToken);

  return <>{accessToken ? [children] : <Navigate to={'/login'} />}</>;
};
