import sprite from '../../images/sprite.svg';
import styles from './Icon.module.css';
interface IconProps {
  id: string;
  size?: number;
  fill?: string;
  stroke?: string;
  boxStyles?: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({
  id,
  size = 32,
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
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
      >
        <use href={`${sprite}#${id}`} />
      </svg>
    </div>
  );
};
export default Icon;
