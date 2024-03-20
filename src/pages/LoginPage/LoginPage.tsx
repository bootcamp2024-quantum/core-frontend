import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { loginSchema } from "../../schemas";
import { login } from "../../store/user/thunks";
import { UserCredentials } from "../../types";
import styles from "./LoginPageStyles.module.css";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserCredentials>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<UserCredentials> = (data) => {
    dispatch(login(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label className={styles.label}>
        Email
        <input
          {...register("email")}
          className={styles.input}
          placeholder="email"
          type="text"
          id="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label className={styles.label}>
        Password
        <input
          {...register("password")}
          className={styles.input}
          placeholder="password"
          type="text"
          id="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginPage;
