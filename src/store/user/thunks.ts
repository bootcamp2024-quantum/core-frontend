import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { setToken } from '../../api';
import { UserCredentials } from '../../types';
import { UserState } from './slice';
// import { axiosInstance } from "../../axios";

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
    // const token = await axiosInstance.get("/token");
    // => token as { token: { access: boolean, refresh: boolean }, userId: string }
    const { token, userId } = await Promise.resolve({
      token: {
        access: nanoid(),
        refresh: nanoid(),
      },
      userId: nanoid(),
    });

    // set access token to axios environments
    setToken(token.access);

    // getting user with /users/{userId} api route
    const user = await getUserById(userId);

    return { user, token };
  } catch (err) {
    return thunkAPI.rejectWithValue(
      (err as AxiosError).message || 'Uncaught error',
    );
  }
});

export const getUserById = async (id: string) => {
  //   const user = await axiosInstance.get(`/user/${id}`);
  const user = await Promise.resolve({
    id: id,
    name: `User${id}`,
    email: 'useremail@gmail.com',
    avatar: null,
  });

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
