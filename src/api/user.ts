import axios from 'axios';
import { getUserToken, setToken } from '.';
import { RegisterPropsType } from '../schemas';
import { User, UserCredentials } from '../types';
import { ROUTES } from './constants';

export const createUser = async (credentials: RegisterPropsType) => {
  await axios.post(ROUTES.USERS, credentials);

  return true;
};

export const loginUser = async (credentials: UserCredentials) => {
  const { access, refresh, id } = await getUserToken(credentials);

  // set access token to axios environments
  setToken(access);

  // getting user with /users/{userId} api route
  const user = await getUserById(id);

  return { user, token: { access, refresh } };
};

export const getUserById = async (id: string | number): Promise<User> => {
  const {
    data: { username, pk, email, avatar },
  } = await axios.get(`${ROUTES.USERS}${id}/`);

  return {
    username,
    id: pk,
    email,
    avatar,
  };
};
