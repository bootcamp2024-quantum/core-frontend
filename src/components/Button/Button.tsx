import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  text?: string;
  icon?: ReactNode;
  iconPositon?: "before" | "after";
  size?: "lg" | "md" | "sm" | "fit";
  style?: "primary" | "secondary" | "ghost" | "link" | "icon";
  disabled?: boolean;
  className?: string;
}

const Button = ({
  type = "button",
  text,
  icon,
  iconPositon = "after",
  size = "fit",
  style = "primary",
  disabled = false,
  className,
}: ButtonProps) => {
  const buttonStyle = `${styles.default} ${styles[size]} ${styles[style]} ${
    className ? className : ""
  }`;

  return (
    <button type={type} className={buttonStyle} disabled={disabled}>
      {iconPositon === "before" ? icon : null}
      {text}
      {iconPositon === "after" ? icon : null}
    </button>
  );
};

export default Button;
