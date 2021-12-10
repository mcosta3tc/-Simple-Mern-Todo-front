import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TaskSlice } from './api/taskSlice';
export const store = configureStore({
  reducer: {
    [TaskSlice.reducerPath]: TaskSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TaskSlice.middleware)
});

setupListeners(store.dispatch);
