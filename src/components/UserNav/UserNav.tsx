import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ROUTES } from '../../routing/routes';
import { selectUser } from '../../store/user/selectors';
import sprite from '../../assets/sprite.svg';

import css from './UserNav.module.css';

const UserNav = () => {
  const user = useSelector(selectUser);

  return (
    <div className={css.userBlock}>
      <div className={css.userInfo}>
        {user.avatar ? (
          <img src={user.avatar} alt="User avatar" className={css.userAva} />
        ) : (
          <svg className={css.userIcon}>
            <use xlinkHref={`${sprite}#user`} />
          </svg>
        )}
        <p className={css.userName}>{user.name || 'User'}</p>
      </div>
      <Link to={ROUTES.PROFILE} className={css.arrowLink}>
        <svg className={css.arrowIcon}>
          <use xlinkHref={`${sprite}#arrow-down`} />
        </svg>
      </Link>
    </div>
  );
};

export default UserNav;
