import { createSlice } from "@reduxjs/toolkit";
import { login } from "./userOperations";
import { User } from "../../types/User";
import type { AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../../types";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;

export interface UserState {
  user: User;
  token: Token;
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: { id: "", name: "", email: "", avatar: null },
  token: { access: null, refresh: null },
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (
          state: UserState,
          action: PayloadAction<{ user: User; token: Token }>
        ) => {
          state.user = action.payload.user;
          state.token = action.payload.token;

          state.isLoggedIn = true;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(login.rejected, onReject)
      .addCase(login.pending, onPending);
  },
});

function onReject(state: UserState, action: RejectedAction) {
  state.isLoading = false;
  state.error = action.payload as string;
}
function onPending(state: UserState) {
  state.isLoading = true;
  state.error = null;
}

const userReducer = authSlice.reducer;

export default userReducer;
