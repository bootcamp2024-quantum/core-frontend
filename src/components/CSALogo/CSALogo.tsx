import logo from '../../images/logo/csa-logo-1x.png';
import logo2x from '../../images/logo/csa-logo-2x.png';

interface CSALogoProps {
  className?: string;
}

const CSALogo = ({ className }: CSALogoProps) => {
  const dpr = window.devicePixelRatio || 1;

  const logoImage = dpr > 1 ? logo2x : logo;

  return (
    <img src={logoImage} alt="Career Skill Atlas logo" className={className} />
  );
};

export default CSALogo;
