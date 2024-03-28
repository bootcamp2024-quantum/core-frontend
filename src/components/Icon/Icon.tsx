import sprite from '../../assets/sprite.svg';
import styles from './Icon.module.css';
interface IconProps {
  id: string;
  size?: number;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  boxStyles?: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({
  id,
  size = 28,
  width,
  height,
  fill,
  stroke,
  onClick,
  className = '',
  boxStyles = '',
}: IconProps) => {
  return (
    <div onClick={onClick} className={`${styles.box} ${boxStyles}`}>
      <svg
        className={className}
        width={width || size}
        height={height || size}
        fill={fill}
        stroke={stroke}
      >
        <use href={`${sprite}#${id}`} />
      </svg>
    </div>
  );
};
export default Icon;
