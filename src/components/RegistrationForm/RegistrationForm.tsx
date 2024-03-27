import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { useAppDispatch } from '../../hooks/redux';
import {
  RegisterPropsType,
  registerSchema,
} from '../../schemas/registerSchema';
import { register } from '../../store/user/thunks';
import AvatarInput from '../AvatarInput/AvatarInput';
import Input from '../Input';

import Spiner from '../Spiner';
import styles from './RegistrationForm.module.css';
import toast from 'react-hot-toast';
import { ROUTES } from '../../Routing/routes';
import { useNavigate } from 'react-router';

const RegistrationForm = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterPropsType>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      avatar: null,
    },
  });

  const onSubmit: SubmitHandler<RegisterPropsType> = (data) => {
    setIsSubmitting(true);

    if (avatarFile) {
      data.avatar = avatarFile;
    }

    dispatch(register(data))
      .then((res) => {
        if (res.type.includes('rejected')) {
          toast.error(res.payload as string);
          return;
        }

        navigate(ROUTES.PROFILE);
        reset();
      })
      .finally(() => setIsSubmitting(false));
  };

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const localPath = URL.createObjectURL(file);
      setAvatarImagePath(localPath);
    }
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [avatarImagePath, setAvatarImagePath] = useState<string>('');

  return (
    <section className={styles.form}>
      <h2 className={styles.registerTitle}>Sign up</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.divFormRegister}
      >
        <div className={styles.formWrapper}>
          <div className={styles.registerGroup}>
            <Input
              register={formRegister('username')}
              placeholder="Name and surname"
              error={errors.username?.message}
            />
            <Input
              register={formRegister('email')}
              placeholder="E-mail"
              error={errors.email?.message}
            />
            <Input
              register={formRegister('password')}
              placeholder="Password"
              type={shouldShowPassword ? 'text' : 'password'}
              error={errors.password?.message}
              icon={
                <Icon
                  className={styles.eyeIcon}
                  id={shouldShowPassword ? 'eye' : 'eye-closed'}
                  boxStyles={styles.iconBox}
                  onClick={() => {
                    setShouldShowPassword((p) => !p);
                  }}
                />
              }
            />
            <Input
              register={formRegister('repeat_password')}
              placeholder="Confirm password"
              type={shouldShowPassword ? 'text' : 'password'}
              error={errors.repeat_password?.message}
              icon={
                <Icon
                  className={styles.eyeIcon}
                  id={shouldShowPassword ? 'eye' : 'eye-closed'}
                  boxStyles={styles.iconBox}
                  onClick={() => {
                    setShouldShowPassword((p) => !p);
                  }}
                />
              }
            />
          </div>
          <AvatarInput
            handleAvatarChange={handleAvatarChange}
            handleFileButtonClick={handleFileButtonClick}
            avatarImagePath={avatarImagePath}
            fileInputRef={fileInputRef}
          />
        </div>
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
    </section>
  );
};

export default RegistrationForm;
