import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { setToken } from '../../api';
import { getUserById, getUserToken } from '../../api/user';
import { UserCredentials } from '../../types';
import { UserState } from './slice';
import { RegisterPropsType } from '../../schemas';

export const register = createAsyncThunk<
  Pick<UserState, 'user' | 'token'>,
  RegisterPropsType,
  {
    rejectValue: string;
  }
>('user/register', async (credentials, thunkAPI) => {
  try {
    const { email, password } = credentials;

    await axios.post('/users/', credentials);

    const { access, refresh, id } = await getUserToken({ email, password });

    setToken(access);

    const user = await getUserById(id);

    return { user, token: { access, refresh } };
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
    const { access, refresh, id } = await getUserToken({ email, password });

    // set access token to axios environments
    setToken(access);

    // getting user with /users/{userId} api route
    const user = await getUserById(id);

    return { user, token: { access, refresh } };
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Registration failed: Unknown error',
    );
  }
});
