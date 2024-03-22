import styles from './PageTitle.module.css';

interface PageTitleProps {
  children: string;
  className?: string;
}

const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <p className={`${styles.title} ${className ? className : ''}`}>
      {children}
    </p>
  );
};

export default PageTitle;
