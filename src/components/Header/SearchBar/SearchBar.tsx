import React, { useState } from "react";

import css from "./SearchBar.module.css";

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
    <div className={isSearchOpen ? css.searchBar : css.searchBarClosed}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="What are you looking for?"
        />
        <button type="submit" className={css.button} onClick={handleButtonClick}>
          <span className={css.buttonLabel}>icon</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
