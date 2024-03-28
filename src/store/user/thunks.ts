import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createUser, getUserById, getUserToken, setToken } from '../../api';
import { RegisterPropsType } from '../../schemas';
import { UserCredentials } from '../../types';
import { UserState } from './slice';

export const register = createAsyncThunk<
  boolean,
  RegisterPropsType,
  {
    rejectValue: string;
  }
>('user/register', async (credentials, thunkAPI) => {
  try {
    await createUser(credentials);

    return true;
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Registration failed: Unknown error',
    );
  }
});

export const login = createAsyncThunk<
  Pick<UserState, 'user' | 'token'>,
  UserCredentials,
  {
    rejectValue: string;
  }
>('user/login', async (credentials, thunkAPI) => {
  try {
    const { access, refresh, user_id } = await getUserToken(credentials);
    setToken(access);

    const user = await getUserById(user_id);

    return { user, token: { access, refresh } };
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Log in failed: Unknown error',
    );
  }
});
