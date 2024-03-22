import { ReactNode, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  title?: string;
  icon?: ReactNode;
  error?: string;
}

const Input = ({ title, icon, error, register, ...rest }: InputProps) => {
  const errorInputStyles = error ? styles.errorInput : '';

  return (
    <label className={styles.label}>
      {title}
      <input
        {...register}
        className={`${styles.input} ${errorInputStyles}`}
        {...rest}
      />
      {icon}
      {error && <p className={styles.errorText}>{error}</p>}
    </label>
  );
};

export default Input;
