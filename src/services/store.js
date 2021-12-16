import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Query } from './api/Query';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [Query.reducerPath]: Query.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Query.middleware)
});

setupListeners(store.dispatch);
