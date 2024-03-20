import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import AuthNav from '../AuthNav/AuthNav';
import UserNav from "../UserNav/UserNav";
import SearchBar from './SearchBar/SearchBar'
import { ROUTES } from '../routes';

import css from './Header.module.css';

const Header: React.FC = () => {
    const isAuthenticated = false;
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

    return (
        <header className={css.header}>
            <NavLink to={ROUTES.HOME} className={css.logo}>logo</NavLink>
            <div>
                {isSearchVisible ? (
                    <SearchBar onClose={handleSearchClose} />
                ) : (
                    <ul className={css.headerMenu} style={{ display: isNavVisible ? 'flex' : 'none' }}>
                        {navItems.map((item, index) => (
                            <li key={index} className={location.pathname === item.route ? css.active : ''}>
                                <NavLink to={item.route}>{item.text}</NavLink>
                            </li>
                        ))}
                        <li>
                            <button type="button" className={css.searchBarBtn} onClick={handleSearchClick}>Search</button>
                        </li>
                    </ul>
                )}
            </div>
            {isAuthenticated ? <UserNav /> : <AuthNav />}
        </header>
    );
};

export default Header;
