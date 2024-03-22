import * as yup from "yup";

export const editProfileSchema = yup.object().shape({
  username: yup.string().min(4),
  email: yup.string().email(),
  website: yup.string().url().nullable(),
});
