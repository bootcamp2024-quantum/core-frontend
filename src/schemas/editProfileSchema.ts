import * as yup from 'yup';

export const editProfileSchema = yup.object().shape({
  name: yup.string().required('Name is required!'),
});
