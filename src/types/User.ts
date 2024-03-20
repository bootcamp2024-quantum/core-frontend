export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
};

export type UserCredentials = { email: string; password: string };
