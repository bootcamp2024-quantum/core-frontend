import styles from './Spiner.module.css';

interface SpinerProps {
  className?: string;
  containerClassName?: string;
  size?: number;
  borderWidth?: number;
}

const Spiner = ({
  className = '',
  containerClassName = '',
  size = 30,
  borderWidth = 4,
}: SpinerProps) => {
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

export default Spiner;
