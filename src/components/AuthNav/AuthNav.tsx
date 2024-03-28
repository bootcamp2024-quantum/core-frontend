import { Link } from 'react-router-dom';

import { ROUTES } from '../../routing/routes';

import { buttonVariant } from '../Button/Button';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={styles.authNavList}>
      <li>
        <Link
          to={ROUTES.LOGIN}
          className={buttonVariant({ size: 'sm', variant: 'secondary' })}
        >
          Log in
        </Link>
      </li>
      <li>
        <Link
          to={ROUTES.REGISTER}
          className={buttonVariant({
            size: 'sm',
            variant: 'primary',
          })}
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
