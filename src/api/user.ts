import axios from 'axios';
import { RegisterPropsType } from '../schemas';
import { User } from '../types';
import { ENDPOINTS } from './constants';

export const createUser = async (credentials: RegisterPropsType) => {
  await axios.post(ENDPOINTS.USERS, credentials);

  return true;
};

export const getUserById = async (id: string | number): Promise<User> => {
  const {
    data: { username, pk, email, avatar },
  } = await axios.get(`${ENDPOINTS.USERS}${id}/`);

  return {
    username,
    id: pk,
    email,
    avatar,
  };
};
