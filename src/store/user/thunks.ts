import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createUser, loginUser } from '../../api';
import { RegisterPropsType } from '../../schemas';
import { UserCredentials } from '../../types';
import { UserState } from './slice';

export const register = createAsyncThunk<
  Pick<UserState, 'user' | 'token'>,
  RegisterPropsType,
  {
    rejectValue: string;
  }
>('user/register', async (credentials, thunkAPI) => {
  try {
    const { email, password } = credentials;

    await createUser(credentials);

    const user = await loginUser({ email, password });

    return user;
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
    const user = await loginUser(credentials);

    return user;
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Log in failed: Unknown error',
    );
  }
});
