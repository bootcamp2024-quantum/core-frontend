import axios from 'axios';
import { Token, User, UserCredentials } from '../types';

type TokenResponseType = Required<
  Token & {
    id: string | number;
  }
>;

export const getUserToken = async (credentials: UserCredentials) => {
  const {
    data: { refresh, access, user_id },
  } = await axios.post('/token/', credentials);

  const token: TokenResponseType = {
    refresh,
    access,
    id: user_id,
  };

  return token;
};

export const getUserById = async (id: string | number): Promise<User> => {
  const {
    data: { username, pk, email, avatar },
  } = await axios.get(`/users/${id}`);

  return {
    username,
    id: pk,
    email,
    avatar,
  };
};
