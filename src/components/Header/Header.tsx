import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { ROUTES } from '../../Routing/routes';
import logo from '../../assets/csa-logo-desktop.svg';
import { selectIsLoggedIn } from '../../store/user/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import SearchBar from './SearchBar/SearchBar';

import Button, { buttonVariant } from '../Button';
import Icon from '../Icon';
import styles from './Header.module.css';

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
    <header className={styles.header}>
      <a href={'/'} target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Career Skill Atlas logo" />
      </a>
      <div className={styles.headerMenu}>
        {isSearchVisible ? (
          <SearchBar onClose={handleSearchClose} />
        ) : (
          <ul
            className={styles.headerNavMenu}
            style={{ display: isNavVisible ? 'flex' : 'none' }}
          >
            {navItems.map((item, index) => {
              const activeStyle =
                location.pathname === item.route ? styles.active : '';
              return (
                <li key={index} className={activeStyle}>
                  <NavLink
                    to={item.route}
                    className={buttonVariant({
                      size: 'xsm',
                      variant: 'ghost',
                      className: styles.searchBarBtn,
                    })}
                  >
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <Button
                type="button"
                variant="ghost"
                size="xsm"
                className={styles.searchBarBtn}
                onClick={handleSearchClick}
                icon={<Icon id="search" className={styles.searchIcon} />}
              >
                Search
              </Button>
            </li>
          </ul>
        )}
        {isAuthenticated ? <UserNav /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
