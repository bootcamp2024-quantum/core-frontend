import { Link } from 'react-router-dom'

import { ROUTES } from '../routes';

import css from './Footer.module.css'

const Footer = () => {
    const navItems = [
        { route: ROUTES.HOME, text: 'Terms of service' },
        { route: ROUTES.HOME, text: 'Privacy policy' },
        { route: ROUTES.HOME, text: 'Cookie policy' }
    ];

    return (
        <footer className={css.footer}>
            <div className={css.footerContent}>
                <div className={css.footerContactBlock}>
                    <h2 className={css.footerContentTitle}>Contact us</h2>
                </div>
                <div className={css.footerFeedbackBlock}>
                    <h2 className={css.footerContentTitle}>Leave us a feedback</h2>
                </div>
            </div>
            <div className={css.footerAdditionalBlock}>
                <ul className={css.additionalBlockNav}>
                    {navItems.map((item, index) => (
                        <li key={index} className={css.link}>
                            <Link to={item.route}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <p className={css.copyrights}>Copyright *name* 2024</p>
            </div>
        </footer>
    )
}

export default Footer