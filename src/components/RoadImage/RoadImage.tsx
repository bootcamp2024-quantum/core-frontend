import road1x from '../../images/forms/road-1x.png';
import road2x from '../../images/forms/road-2x.png';

interface RoadImageProps {
  className?: string;
}

const RoadImage = ({ className }: RoadImageProps) => {
  const dpr = window.devicePixelRatio || 1;
  const roadImage = dpr > 1 ? road2x : road1x;

  return <img src={roadImage} alt="The road" className={className} />;
};

export default RoadImage;
