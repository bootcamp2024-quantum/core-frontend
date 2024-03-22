import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  email: yup.string().email().required('Email is required!'),
  password: yup.string().min(8).max(20).required('Password is required!'),
  confirm_password: yup
    .string()
    .min(8)
    .max(20)
    .required('Password is required!'),
  // avatar: yup.string().nullable(),
});
