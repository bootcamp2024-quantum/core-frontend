import { ReactNode } from 'react';
import styles from './MaxWidthWrapper.module.css';

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={`${styles.wrapper} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
