import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { setToken } from '../../api';
import { getUserById } from '../../api/user';
import { UserCredentials } from '../../types';
import { UserState } from './slice';

export const register = createAsyncThunk<
  Pick<UserState, 'user' | 'token'>,
  UserCredentials,
  {
    rejectValue: string;
  }
>('user/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('user/register', credentials);
    setToken(response.data.token);
    const user = await getUserById(response.data.userId);
    return { user, token: response.data.token };
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Log in failed: Unknown error',
    );
  }
});

export const login = createAsyncThunk<
  Pick<UserState, 'user' | 'token'>,
  UserCredentials,
  {
    rejectValue: string;
  }
>('user/login', async ({ email, password }, thunkAPI) => {
  try {
    // login user with /token api route
    const { data } = await axios.post('/token/', {
      email,
      password,
    });

    const { refresh, access, user_id } = data as {
      refresh: string;
      access: string;
      user_id: string | number;
    };

    // set access token to axios environments
    setToken(access);

    // getting user with /users/{userId} api route
    const user = await getUserById(user_id);

    return { user, token: { access, refresh } };
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Registration failed: Unknown error',
    );
  }
});
