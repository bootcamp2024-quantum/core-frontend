import { useState, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { registerSchema } from '../../schemas/registerSchema';
import { register } from '../../store/user/thunks';
import { useAppDispatch } from '../../hooks/redux';
import sprite from '../../images/sprite.svg';

import css from './RegistrationForm.module.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  avatar?: File | undefined;
}

const FormRegistration = () => {
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
    setAvatarFile(file || null);
  };

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
          <div className={css.photoBlock}>
            <p className={css.photoTitle}>Photo(optional)</p>
            <div className={css.divPhotoThumb}>
              <input
                ref={fileInputRef}
                id="photo"
                className={css.photoInput}
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
              <Icon id="user" className={css.userIcon} />
            </div>
            <button
              type="button"
              className={css.customFileButton}
              onClick={handleFileButtonClick}
            >
              Upload
              <span>
                <svg className={css.uploadIcon}>
                  <use xlinkHref={`${sprite}#upload`} />
                </svg>
              </span>
            </button>
          </div>
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

export default FormRegistration;
