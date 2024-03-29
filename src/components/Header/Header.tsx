import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import SearchBar from './SearchBar/SearchBar';
import { ROUTES } from '../../routing/routes';
import logo from '../../assets/csa-logo-desktop.svg';
import sprite from '../../assets/sprite.svg';
import { selectIsLoggedIn } from '../../store/user/selectors';

import css from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navItems = [
    { route: ROUTES.HOME, text: 'Home' },
    { route: ROUTES.ROADMAPS, text: 'Roadmaps' },
    { route: ROUTES.ABOUT_US, text: 'About Us' },
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
      <a href={'/'} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Career Skill Atlas logo" />
      </a>
      <div className={css.headerMenu}>
        {isSearchVisible ? (
          <SearchBar onClose={handleSearchClose} />
        ) : (
          <ul
            className={css.headerNavMenu}
            style={{ display: isNavVisible ? 'flex' : 'none' }}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={location.pathname === item.route ? css.active : ''}
              >
                <NavLink to={item.route} className={css.navMenuItem}>
                  {item.text}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                type="button"
                className={css.searchBarBtn}
                onClick={handleSearchClick}
              >
                Search
                <span>
                  <svg className={css.searchIcon}>
                    <use xlinkHref={`${sprite}#search`} />
                  </svg>
                </span>{' '}
              </button>
            </li>
          </ul>
        )}
        {isAuthenticated ? <UserNav /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
