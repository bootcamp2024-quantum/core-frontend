import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import AvatarInput from '../AvatarInput/AvatarInput';
import { FormData } from '../../types';
import { registerSchema } from '../../schemas/registerSchema';
import { register } from '../../store/user/thunks';
import { useAppDispatch } from '../../hooks/redux';

import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (avatarFile) {
      data.avatar = avatarFile;
    }
    dispatch(register(data));
    reset();
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
    <section className={css.form}>
      <h2 className={css.registerTitle}>Sign up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={css.divFormRegister}>
        <div className={css.formWrapper}>
          <div className={css.registerGroup}>
            <Input
              register={formRegister('name')}
              placeholder="Name and surname"
              error={errors.name?.message}
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
                  className={css.eyeIcon}
                  id={shouldShowPassword ? 'eye' : 'eye-closed'}
                  boxStyles={css.iconBox}
                  onClick={() => {
                    setShouldShowPassword((p) => !p);
                  }}
                />
              }
            />
            <Input
              register={formRegister('confirm_password')}
              placeholder="Confirm password"
              type={shouldShowPassword ? 'text' : 'password'}
              error={errors.confirm_password?.message}
              icon={
                <Icon
                  className={css.eyeIcon}
                  id={shouldShowPassword ? 'eye' : 'eye-closed'}
                  boxStyles={css.iconBox}
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
        <div>
          <Button
            type="submit"
            size="lg"
            variant="primary"
            className={css.loginButton}
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationForm;
