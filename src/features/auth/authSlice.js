import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { userId: null, accessToken: null },
  reducers: {
    setCredentials: (state, { payload: { accessToken } }) => {
      state.accessToken = accessToken;
    },
    setRefreshToken: (state, { payload: { refreshToken } }) => {
      state.refreshToken = refreshToken;
    }
  }
});

export const { setCredentials, setRefreshToken } = slice.actions;
export default slice.reducer;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state) => state.auth.refreshToken;
