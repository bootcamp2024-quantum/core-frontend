import styles from './Spinner.module.css';

interface SpinnerProps {
  className?: string;
  containerClassName?: string;
  size?: number;
  borderWidth?: number;
}

const Spinner = ({
  className = '',
  containerClassName = '',
  size = 30,
  borderWidth = 4,
}: SpinnerProps) => {
  const containerStyle = size
    ? { width: `${size}px`, height: `${size}px` }
    : undefined;

  const loaderStyle = { borderWidth: `${borderWidth}px` };

  return (
    <div
      className={`${styles.container} ${containerClassName}`}
      style={containerStyle}
    >
      <span className={`${styles.loader} ${className}`} style={loaderStyle} />
    </div>
  );
};

export default Spinner;
