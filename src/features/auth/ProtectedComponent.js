import { useProtectedMutation, useRefreshTokenMutation } from '../../services/api/Query';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentRefreshToken, setCredentials } from './authSlice';
import { useEffect } from 'react';

export function ProtectedComponent() {
  const dispatch = useDispatch();

  const [attemptAccess, { data, error }] = useProtectedMutation();
  const [attemptRefreshToken] = useRefreshTokenMutation();

  const refreshTokenSelector = useSelector(selectCurrentRefreshToken);

  useEffect(() => {
    async function refreshToken() {
      if (error && error.status === 401) {
        console.log('refresh', refreshTokenSelector);
        await attemptRefreshToken({ refreshToken: refreshTokenSelector }).then((response) => {
          dispatch(setCredentials(response.data));
        });
      }
    }
    try {
      refreshToken();
    } catch (e) {
      console.log(e);
    }
  }, [attemptRefreshToken, dispatch, error, refreshTokenSelector]);

  return (
    <>
      <button onClick={() => attemptAccess()}>Make an authenticated request</button>
      <div>
        {data ? (
          <>
            Data:<pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        ) : error ? (
          <>
            Error: <pre>{JSON.stringify(error, null, 2)}</pre>
          </>
        ) : null}
      </div>
    </>
  );
}
