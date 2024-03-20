import { Link } from 'react-router-dom';

import { ROUTES } from '../routes';

import css from './AuthNav.module.css';

const AuthNav: React.FC = () => {
    return (
        <div>
            <ul className={css.authNavList}>
                <li className={css.loginBtn}><Link to={ROUTES.LOGIN}>Log in</Link></li>
                <li className={css.signUpBtn}><Link to={ROUTES.REGISTER}>Sign up</Link></li>
            </ul>
        </div>
    );
};

export default AuthNav;
