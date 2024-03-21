import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./TextInput.module.css";

interface TextInputProps {
  register: UseFormRegisterReturn;
  title?: string;
  placeholder?: string;
  type?: string;
  icon?: ReactNode;
  error?: string;
}

const TextInput = ({
  title,
  placeholder,
  type = "text",
  icon,
  error,
  register,
}: TextInputProps) => {
  const errorInputStyles = error ? styles.errorInput : "";

  return (
    <label className={styles.label}>
      {title}
      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className={`${styles.input} ${errorInputStyles}`}
      />
      {icon}
      {error && <p className={styles.errorText}>{error}</p>}
    </label>
  );
};

export default TextInput;
