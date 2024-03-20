import { Link } from 'react-router-dom';

import { ROUTES } from '../routes';

import css from './AuthNav.module.css';

const AuthNav: React.FC = () => {
    return (
        <div>
            <ul className={css.authNavList}>
                <li><Link to={ROUTES.LOGIN}>Log in</Link></li>
                <li><Link to={ROUTES.REGISTER}>Sign up</Link></li>
            </ul>
        </div>
    );
};

export default AuthNav;
