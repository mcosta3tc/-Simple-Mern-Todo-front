import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { userId: null, accessToken: null },
  reducers: {
    setCredentials: (state, { payload: { userId, accessToken } }) => {
      state.userId = userId;
      state.accessToken = accessToken;
    }
  }
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state) => state.auth.userId;
