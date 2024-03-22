import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'before' | 'after';
  size?: 'lg' | 'md' | 'sm' | 'xsm' | 'fit';
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'icon';
}

const Button = ({
  children,
  icon,
  iconPosition = 'after',
  size = 'fit',
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => {
  const buttonStyle = `${styles.default} ${styles[size]} ${styles[variant]} ${
    className ? className : ''
  }`;

  return (
    <button className={buttonStyle} {...rest}>
      {iconPosition === 'before' ? icon : null}
      {children}
      {iconPosition === 'after' ? icon : null}
    </button>
  );
};

export default Button;
