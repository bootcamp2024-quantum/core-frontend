import axios from 'axios';
import { Token, UserCredentials } from '../types';
import { ENDPOINTS } from './constants';

type TokenResponseType = Required<
  Token & {
    user_id: string | number;
  }
>;

export const getUserToken = async (credentials: UserCredentials) => {
  const { data } = await axios.post(ENDPOINTS.TOKEN, credentials);
  return data as TokenResponseType;
};
