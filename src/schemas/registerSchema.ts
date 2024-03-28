import * as yup from 'yup';
import { LIMITS, MESSAGES } from './constants';

// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
// const FILE_SIZE = 2000000; // 2MB

export const registerSchema = yup.object().shape({
  username: yup.string().required(MESSAGES.NAME_REQUIRED),
  email: yup.string().email().required(MESSAGES.EMAIL_REQUIRED),
  password: yup
    .string()
    .min(LIMITS.PASSWORD[0])
    .max(LIMITS.PASSWORD[1])
    .required(MESSAGES.PASSWORD_REQUIRED),
  repeat_password: yup
    .string()
    .oneOf([yup.ref('password')], MESSAGES.PASSWORD_REPEAT)
    .required(MESSAGES.PASSWORD_REPEAT_REQUIRED),
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
