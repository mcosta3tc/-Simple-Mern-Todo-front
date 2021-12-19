import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../services/api/Query';

function Logout() {
  const navigate = useNavigate();
  const [attemptLogout] = useLogoutMutation();
  return (
    <button
      className={
        'dark:text-neutral-200 dark:bg-neutral-700 shadow-neutral-200 bg-neutral-100 dark:shadow-neutral-600 m-2 px-4 py-2 rounded-lg shadow-lg focus:hide'
      }
      onClick={async (event) => {
        event.preventDefault();
        await attemptLogout()
          .then(() => {
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
