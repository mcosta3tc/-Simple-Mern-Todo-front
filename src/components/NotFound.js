import React from 'react';

function NotFound() {
  return (
    <div
      className={
        'bg-neutral-50 dark:bg-neutral-900 h-screen mx-auto flex items-center justify-center flex-col'
      }>
      <h1 className={'dark:text-neutral-50 text-2xl py-2 '}>404</h1>
      <h2 className={'dark:text-neutral-50 text-lg'}>You're lost.</h2>
      <p
        className={
          'dark:text-neutral-50 text-center text-center text-sm w-5/6 md:w-3/5 lg:w-1/4 2xl:w-1/6'
        }>
        The page you are looking for does not exist. How you got here is a mystery. But you can
        click the button below to go back to the homepage.
      </p>
      <button
        className={
          'dark:text-neutral-50 text-neutral-900 dark:bg-neutral-700 shadow-neutral-200 bg-neutral-100 dark:shadow-neutral-600 my-8 px-4 py-2 rounded-lg shadow-lg'
        }>
        Back Home
      </button>
    </div>
  );
}

export default NotFound;
