import axios from 'axios';
import { User } from '../types';

export const getUserById = async (id: string | number): Promise<User> => {
  const { data: user } = await axios.get(`/users/${id}`);

  return {
    name: user.username,
    id: user.pk,
    email: user.email,
    avatar: user.avatar,
  };
};
