import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApsToken } from '../types';

type SetAuth = PayloadAction<{ success: boolean; tokenData?: ApsToken }>;

interface InitialState {
  auth: boolean;
  apsToken: ApsToken;
}

const initialState: InitialState = {
  auth: false,
  apsToken: { access_token: '', token_type: '', expires_in: 0, refresh_token: '' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, { payload }: SetAuth) {
      state.auth = payload.success;
      state.apsToken = payload.success && payload.tokenData ? payload.tokenData : initialState.apsToken;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuth } = authSlice.actions;
