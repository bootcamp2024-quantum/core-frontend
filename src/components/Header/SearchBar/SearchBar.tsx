import React, { useState } from 'react';

import sprite from '../../../assets/sprite.svg';

import styles from './SearchBar.module.css';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    onClose();
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={isSearchOpen ? styles.searchBar : styles.searchBarClosed}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="What are you looking for?"
        />
        <button
          type="submit"
          className={styles.button}
          onClick={handleButtonClick}
        >
          <svg className={styles.searchIcon}>
            <use xlinkHref={`${sprite}#search`} />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
