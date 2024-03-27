import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from '../../routing/routes';
import { selectUser } from '../../store/user/selectors';
import sprite from '../../assets/sprite.svg';

import styles from './UserNav.module.css';

const UserNav = () => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.userBlock}>
      <div className={styles.userInfo}>
        {user.avatar ? (
          <img src={user.avatar} alt="User avatar" className={styles.userAva} />
        ) : (
          <svg className={styles.userIcon}>
            <use xlinkHref={`${sprite}#user`} />
          </svg>
        )}
        <p className={styles.userName}>{user.name || 'User'}</p>
      </div>
      <Link to={ROUTES.PROFILE} className={styles.arrowLink}>
        <svg className={styles.arrowIcon}>
          <use xlinkHref={`${sprite}#arrow-down`} />
        </svg>
      </Link>
    </div>
  );
};

export default UserNav;
