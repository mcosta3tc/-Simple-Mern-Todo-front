import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const cookie = document.cookie;
  return <>{cookie ? [children] : <Navigate to={'/login'} />}</>;
};
