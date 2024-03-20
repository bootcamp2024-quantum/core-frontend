import { Link } from 'react-router-dom';

import { ROUTES } from '../routes';

import css from './UserNav.module.css';

const AuthNav: React.FC = () => {
  return (
    <div>
      <ul className={css.authNavList}>
        <li><Link to={ROUTES.PROFILE}>Profile</Link></li>
        <li><Link to={ROUTES.LOGOUT}>Log out</Link></li>
      </ul>
    </div>
  );
};

export default AuthNav;
