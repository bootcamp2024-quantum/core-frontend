import { Link } from 'react-router-dom';

import instagram1x from '../../../images/social/instagram-1x.png';
import instagram2x from '../../../images/social/instagram-2x.png';
import facebook1x from '../../../images/social/facebook-1x.png';
import facebook2x from '../../../images/social/facebook-2x.png';
import twitter1x from '../../../images/social/twitter-1x.png';
import twitter2x from '../../../images/social/twitter-2x.png';

import css from './SocialList.module.css';

const SocialList = () => {
  const dpr = window.devicePixelRatio || 1;

  const instagramLogo = dpr > 1 ? instagram2x : instagram1x;
  const facebookLogo = dpr > 1 ? facebook2x : facebook1x;
  const twitterLogo = dpr > 1 ? twitter2x : twitter1x;

  return (
    <ul className={css.socialList}>
      <li className={css.socialListItem}>
        <Link to={'/'}>
          <img src={instagramLogo} alt="Instagram" />
        </Link>
      </li>
      <li className={css.socialListItem}>
        <Link to={'/'}>
          <img src={facebookLogo} alt="Facebook" />
        </Link>
      </li>
      <li className={css.socialListItem}>
        <Link to={'/'}>
          <img src={twitterLogo} alt="Twitter" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialList;
