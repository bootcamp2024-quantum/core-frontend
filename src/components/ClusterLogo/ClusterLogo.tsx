import logo from '../../images/logo/cluster-logo-1x.png';
import logo2x from '../../images/logo/cluster-logo-2x.png';

interface ClusterLogoProps {
  className?: string;
}

const ClusterLogo = ({ className }: ClusterLogoProps) => {
  const dpr = window.devicePixelRatio || 1;

  const clusterLogo = dpr > 1 ? logo2x : logo;

  return (
    <img
      src={clusterLogo}
      alt="Kharkiv IT Cluster logo"
      className={className}
    />
  );
};

export default ClusterLogo;
