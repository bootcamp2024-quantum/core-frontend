import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosInstance, setToken } from '../../api';
import { User, UserCredentials } from '../../types';
import { UserState } from './slice';

export const login = createAsyncThunk<
  Pick<UserState, 'user' | 'token'>,
  UserCredentials,
  {
    rejectValue: string;
  }
>('user/login', async ({ email, password }, thunkAPI) => {
  try {
    console.log(email, password);

    // login user with /token api route
    const { data } = await axiosInstance.get('/token/');
    const { refresh, access, user_id } = data as {
      refresh: string;
      access: string;
      user_id: string | number;
    };
    console.log(data);
    // set access token to axios environments
    setToken(access);

    // getting user with /users/{userId} api route
    const user = await getUserById(user_id);

    return { user, token: { access, refresh } };
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Uncaught error',
    );
  }
});

export const getUserById = async (id: string | number): Promise<User> => {
  const { data: user } = await axiosInstance.get(`/users/${id}`);

  return user;
};

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
      (err as AxiosError).message || 'Registration failed: Unknown error',
    );
  }
});
