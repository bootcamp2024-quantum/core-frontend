export interface FormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  avatar?: File | undefined;
}
