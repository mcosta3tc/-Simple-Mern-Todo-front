import { useProtectedMutation } from '../../services/api/Query';

export function ProtectedComponent() {
  const [attemptAccess, { data, error }] = useProtectedMutation();

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
