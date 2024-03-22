import React, { useState } from 'react';

import sprite from '../../images/sprite.svg'

import css from './ProfileSelector.module.css';

interface SelectorProps {
    onSelect: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({ onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string>('profile');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSelect(selectedValue);
    };

    return (
        <select
            name="userSelector"
            id="userSelector"
            value={selectedOption}
            onChange={handleSelectChange}
            className={css.selector}
            aria-label="Profile Selector"
        >
            <option value="profile" className={css.option}>
                <svg className={css.searchIcon}>
                    <use xlinkHref={`${sprite}#search`} />
                </svg>
                Profile
            </option>
            <option value="activity" className={css.option}>
                Activity
            </option>
            <option value="roadmaps" className={css.option}>
                Roadmaps
            </option>
        </select>
    );
};

export default Selector;
