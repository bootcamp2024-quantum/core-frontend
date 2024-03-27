import { Link } from 'react-router-dom';

import { ROUTES } from '../../Routing/routes';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <ul className={styles.authNavList}>
        <li>
          <Link to={ROUTES.LOGIN} className={styles.loginBtn}>
            Log in
          </Link>
        </li>
        <li>
          <Link to={ROUTES.REGISTER} className={styles.signUpBtn}>
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
