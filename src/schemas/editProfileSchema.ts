import * as yup from 'yup';
import { MESSAGES } from './constants';

export const editProfileSchema = yup.object().shape({
  name: yup.string().required(MESSAGES.NAME_REQUIRED),
});
