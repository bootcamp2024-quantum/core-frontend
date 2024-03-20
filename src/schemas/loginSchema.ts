import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(32, "Password must be no longer than 32 characters")
    .required("Password is required"),
});
