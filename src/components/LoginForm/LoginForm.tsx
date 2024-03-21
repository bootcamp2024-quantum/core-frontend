import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Input from '../Input';
import { useAppDispatch } from '../../hooks/redux';
import { loginSchema } from '../../schemas';
import { login } from '../../store/user/thunks';
import { UserCredentials } from '../../types';
import styles from './LoginForm.module.css';

const LoginForm = () => {
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
      <Input
        register={register('email')}
        placeholder="E-mail"
        error={errors.email?.message}
      />
      <Input
        register={register('password')}
        placeholder="Password"
        type={shouldShowPassword ? 'text' : 'password'}
        error={errors.password?.message}
        icon={
          <Icon
            id={shouldShowPassword ? 'eye-closed' : 'eye'}
            boxStyles={styles.iconBox}
            onClick={() => {
              setShouldShowPassword((p) => !p);
            }}
          />
        }
      />

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className={styles.loginButton}
      >
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
