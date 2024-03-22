import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthNav from '../AuthNav/AuthNav';
import UserNav from "../UserNav/UserNav";
import SearchBar from './SearchBar/SearchBar'
import { ROUTES } from '../routes';
import sprite from '../../images/sprite.svg'
import logo from '../../images/logo/logo-1x.png';
import logo2x from '../../images/logo/logo-2x.png';
import { selectIsLoggedIn } from "../../store/user/selectors";

import css from './Header.module.css';

const Header = () => {
    const isAuthenticated = useSelector(selectIsLoggedIn);
    const location = useLocation();
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navItems = [
        { route: ROUTES.HOME, text: 'Home' },
        { route: ROUTES.ROADMAPS, text: 'Roadmaps' },
        { route: ROUTES.ABOUT_US, text: 'About Us' }
    ];

    const handleSearchClick = () => {
        setIsSearchVisible(!isSearchVisible);
        setIsNavVisible(!isSearchVisible);
    };

    const handleSearchClose = () => {
        setIsSearchVisible(false);
        setIsNavVisible(true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsSearchVisible(false);
            setIsNavVisible(true);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const dpr = window.devicePixelRatio || 1;

    const logoImage = dpr > 1 ? logo2x : logo;

    return (
        <header className={css.header}>
            <NavLink to={ROUTES.HOME} className={css.logo}>
                <img src={logoImage}
                    alt="Career Skill Atlas logo" />
            </NavLink>
            <div className={css.headerMenu}>
                {isSearchVisible ? (
                    <SearchBar onClose={handleSearchClose} />
                ) : (
                    <ul className={css.headerNavMenu} style={{ display: isNavVisible ? 'flex' : 'none' }}>
                        {navItems.map((item, index) => (
                            <li key={index} className={location.pathname === item.route ? css.active : ''}>
                                <NavLink to={item.route} className={css.navMenuItem}>{item.text}</NavLink>
                            </li>
                        ))}
                        <li>
                            <button type="button" className={css.searchBarBtn} onClick={handleSearchClick}>Search<span>
                                <svg className={css.searchIcon}>
                                    <use xlinkHref={`${sprite}#search`} />
                                </svg>
                            </span> </button>
                        </li>
                    </ul>
                )}
                {/* <UserNav /> */}
                {isAuthenticated ? <UserNav /> : <AuthNav />}
            </div>
        </header>
    );
};

export default Header;
