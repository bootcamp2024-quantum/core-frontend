import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { useAppDispatch } from '../../hooks/redux';
import { ROUTES } from '../../routing/routes';
import { loginSchema } from '../../schemas';
import { login } from '../../store/user/thunks';
import { UserCredentials } from '../../types';
import Input from '../Input';
import Spiner from '../Spiner';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserCredentials>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<UserCredentials> = (data) => {
    setIsSubmitting(true);

    dispatch(login(data))
      .then((res) => {
        if (res.type.includes('rejected')) {
          toast.error(res.payload as string);
          return;
        }

        reset();
        navigate(ROUTES.PROFILE);
      })
      .finally(() => setIsSubmitting(false));
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
        disabled={isSubmitting}
        className={styles.loginButton}
        icon={
          isSubmitting ? <Spiner containerClassName={styles.spiner} /> : null
        }
      >
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
