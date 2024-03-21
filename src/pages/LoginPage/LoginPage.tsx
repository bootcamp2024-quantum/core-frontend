import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { loginSchema } from "../../schemas";
import { login } from "../../store/user/thunks";
import { UserCredentials } from "../../types";
import styles from "./LoginPage.module.css";
import TextInput from "../../components/TextInput";
import { useState } from "react";
import Icon from "../../components/Icon";
import Button from "../../components/Button";

const LoginPage = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
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
      <TextInput
        register={register("email")}
        placeholder="E-mail"
        error={errors.email?.message}
      />
      <TextInput
        register={register("password")}
        placeholder="Password"
        type={shouldShowPassword ? "text" : "password"}
        error={errors.password?.message}
        icon={
          <Icon
            id="eye"
            boxStyles={styles.iconBox}
            onClick={() => {
              setShouldShowPassword((p) => !p);
            }}
          />
        }
      />

      <Button type="submit" text="Submit" size="lg" style="primary" />
    </form>
  );
};

export default LoginPage;
