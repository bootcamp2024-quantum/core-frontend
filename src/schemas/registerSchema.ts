import * as yup from 'yup';

// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
// const FILE_SIZE = 2000000; // 2MB

export const registerSchema = yup.object().shape({
  username: yup.string().required('Name is required!'),
  email: yup.string().email().required('Email is required!'),
  password: yup.string().min(8).max(20).required('Password is required!'),
  repeat_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
  avatar: yup.mixed().notRequired(),
  // .test('fileSize', 'The file is too large', (value) => {
  //   /// @ts-expect-error
  //   return value && value.size <= FILE_SIZE;
  // })
  // .test('fileFormat', 'Unsupported File Format', (value) => {
  //   /// @ts-expect-error
  //   return value && SUPPORTED_FORMATS.includes(value.type);
  // }),
});

export type RegisterPropsType = yup.InferType<typeof registerSchema>;
