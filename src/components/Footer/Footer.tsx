import { Link } from 'react-router-dom';

import Icon from '../Icon';
import SocialList from './SocialList/SocialList';
import ClusterLogo from '../ClusterLogo/ClusterLogo';
import { ROUTES } from '../routes';

import css from './Footer.module.css';

const Footer = () => {
  const contactListItems = [
    { icon: 'phone', text: 'Phone' },
    { icon: 'mail', text: 'Mail' },
    { icon: 'location-bw', text: 'Address' },
  ];

  const navItems = [
    { route: ROUTES.HOME, text: 'Terms of service' },
    { route: ROUTES.HOME, text: 'Privacy policy' },
    { route: ROUTES.HOME, text: 'Cookie policy' },
  ];

  return (
    <footer className={css.footer}>
      <h2 className={css.footerTitle}>Contact us</h2>
      <div className={css.footerCard}>
        <div className={css.footerContactBlock}>
          <p className={css.footerText}>
            Got questions or feedback? Reach out to us! Our team is here to
            assist you.
          </p>
          <ul className={css.contactList}>
            {contactListItems.map((item, index) => (
              <li key={index} className={css.contactListItem}>
                <Icon id={item.icon} className={css.icon} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.footerSocialBlock}>
          <SocialList />
          <Link to={'/'}>
            <ClusterLogo className={css.clusterLogo} />
          </Link>
        </div>
      </div>
      <div className={css.footerAdditionalBlock}>
        <ul className={css.additionalBlockNav}>
          {navItems.map((item, index) => (
            <li key={index} className={css.link}>
              <Link to={item.route}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <p className={css.copyrights}>Copyright Career Skill Atlas 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
