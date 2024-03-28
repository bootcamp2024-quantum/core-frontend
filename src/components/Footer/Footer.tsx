import { Link } from 'react-router-dom';

import Icon from '../Icon';
import SocialList from './SocialList/SocialList';
import { ROUTES } from '../../routing/routes';
import logo from '../../assets/cluster-logo.svg';

import styles from './Footer.module.css';

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
    <footer className={styles.footer}>
      <h2 className={styles.footerTitle}>Contact us</h2>
      <div className={styles.footerCard}>
        <div className={styles.footerContactBlock}>
          <p className={styles.footerText}>
            Got questions or feedback? Reach out to us! Our team is here to
            assist you.
          </p>
          <ul className={styles.contactList}>
            {contactListItems.map((item, index) => (
              <li key={index} className={styles.contactListItem}>
                <Icon id={item.icon} className={styles.icon} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerSocialBlock}>
          <SocialList />
          <a href={'/'} target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="Kharkiv IT Cluster logo"
              className={styles.clusterLogo}
            />
          </a>
        </div>
      </div>
      <div className={styles.footerAdditionalBlock}>
        <ul className={styles.additionalBlockNav}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.link}>
              <Link to={item.route}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <p className={styles.copyrights}>Copyright Career Skill Atlas 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
