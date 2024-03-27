import { useState, ChangeEvent } from 'react';
import styles from './ProfileSelector.module.css';

interface SelectorProps {
  onSelect: (value: string) => void;
}

const Selector = ({ onSelect }: SelectorProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('profile');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onSelect(selectedValue === 'profile' ? 'activity' : 'profile');
  };

  return (
    <select
      name="userSelector"
      id="userSelector"
      value={selectedOption}
      onChange={handleSelectChange}
      className={styles.selector}
      aria-label="Profile Selector"
    >
      {selectedOption === 'profile' ? (
        <option value="profile" className={styles.option}>
          Profile
        </option>
      ) : (
        <option value="activity" className={styles.option}>
          Activity
        </option>
      )}
    </select>
  );
};

export default Selector;
