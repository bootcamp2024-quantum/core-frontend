import { Link } from 'react-router-dom';

import { ROUTES } from '../routes';

import css from './UserNav.module.css';

const UserNav= () => {
  return (
    <div>
      <ul className={css.userNavList}>
        <li><Link to={ROUTES.PROFILE}>Profile</Link></li>
        <li><Link to={ROUTES.HOME}>Log out</Link></li>
      </ul>
    </div>
  );
};

export default UserNav;
