import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Token } from '../../types';
import { User } from '../../types/User';
import { login } from './thunks';
import { register } from './thunks';

export interface UserState {
  user: User;
  token: Token;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: { id: '', username: '', email: '', avatar: null },
  token: { access: undefined, refresh: undefined },
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (
          state: UserState,
          action: PayloadAction<{ user: User; token: Token }>,
        ) => {
          state.user = action.payload.user;
          state.token = action.payload.token;

          state.isLoggedIn = true;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(login.rejected, (state: UserState, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      })
      .addCase(login.pending, onPending)
      .addCase(
        register.fulfilled,
        (
          state: UserState,
          action: PayloadAction<{ user: User; token: Token }>,
        ) => {
          state.user = action.payload.user;
          state.token = action.payload.token;

          state.isLoggedIn = true;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(register.rejected, (state: UserState, action) => {
        state.isLoading = false;
        state.error = action.payload!;
      })
      .addCase(register.pending, onPending);
  },
});

function onPending(state: UserState) {
  state.isLoading = true;
  state.error = null;
}

const userReducer = userSlice.reducer;

export default userReducer;
