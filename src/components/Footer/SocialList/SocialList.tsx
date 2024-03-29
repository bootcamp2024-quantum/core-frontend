import instagram from '../../../assets/instagram.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';

import css from './SocialList.module.css';

const socialMediaPlatforms = [
  { name: 'Instagram', icon: instagram, link: '/' },
  { name: 'Facebook', icon: facebook, link: '/' },
  { name: 'Twitter', icon: twitter, link: '/' },
];

const SocialList = () => {
  return (
    <ul className={css.socialList}>
      {socialMediaPlatforms.map((platform, index) => (
        <li key={index} className={css.socialListItem}>
          <a href={platform.link} target="_blank" rel="noopener noreferrer">
            <img src={platform.icon} alt={platform.name.toLowerCase()} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
