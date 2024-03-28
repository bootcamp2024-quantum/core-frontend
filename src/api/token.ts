import axios from 'axios';
import { Token, UserCredentials } from '../types';
import { ROUTES } from './constants';

type TokenResponseType = Required<
  Token & {
    id: string | number;
  }
>;

export const getUserToken = async (credentials: UserCredentials) => {
  const {
    data: { refresh, access, user_id },
  } = await axios.post(ROUTES.TOKEN, credentials);

  const token: TokenResponseType = {
    refresh,
    access,
    id: user_id,
  };

  return token;
};
