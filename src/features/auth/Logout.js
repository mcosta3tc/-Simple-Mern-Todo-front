import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../services/api/Query';

function Logout() {
  const navigate = useNavigate();
  const [attemptLogout] = useLogoutMutation();
  return (
    <button
      onClick={async (event) => {
        event.preventDefault();
        await attemptLogout()
          .then(() => {
            document.cookie = 'refreshToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
            navigate('/login');
          })
          .catch((error) => {
            console.log(error);
          });
      }}>
      Log out
    </button>
  );
}

export default Logout;
