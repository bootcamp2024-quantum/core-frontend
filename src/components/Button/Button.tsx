import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'before' | 'after';
  size?: 'lg' | 'md' | 'sm' | 'xsm' | 'fit';
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'icon';
}

interface ButtonVariantProps
  extends Pick<ButtonProps, 'size' | 'variant' | 'className'> {}

export function buttonVariant({
  size = 'fit',
  variant = 'primary',
  className,
}: ButtonVariantProps) {
  return `${styles.default} ${styles[size]} ${styles[variant]} ${className}`;
}

const Button = ({
  children,
  icon,
  iconPosition = 'after',
  size,
  variant,
  className,
  ...rest
}: ButtonProps) => {
  const buttonStyle = buttonVariant({ size, variant, className });

  return (
    <button className={buttonStyle} {...rest}>
      {iconPosition === 'before' ? icon : null}
      {children}
      {iconPosition === 'after' ? icon : null}
    </button>
  );
};

export default Button;
