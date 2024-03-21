import { ReactNode } from 'react';
import styles from './MaxWidthWraper.module.css';

interface MaxWidthWraperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWraper = ({ children, className }: MaxWidthWraperProps) => {
  return (
    <div className={`${styles.wraper} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default MaxWidthWraper;
