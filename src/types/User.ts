export type User = {
  id: string;
  username: string;
  email: string;
  avatar: string | null;
};

export type UserCredentials = { email: string; password: string };
