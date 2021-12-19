import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { userId: null, accessToken: null },
  reducers: {
    setCredentials: (state, { payload: { accessToken } }) => {
      state.accessToken = accessToken;
    },
    setCookie: (state, { payload: { cookie } }) => {
      state.cookie = cookie;
    }
  }
});

export const { setCredentials, setCookie } = slice.actions;
export default slice.reducer;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
