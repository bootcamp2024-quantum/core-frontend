import Button from '../Button';
import Icon from '../Icon';
import styles from './NetworkButtons.module.css';

interface NetworkButtonsProps {
  className?: string;
  googleCallback: () => void;
  linkedinCallback: () => void;
}

const NetworkButtons = ({
  className = '',
  googleCallback,
  linkedinCallback,
}: NetworkButtonsProps) => {
  return (
    <div className={`${styles.buttonsGroup} ${className}`}>
      <Button
        onClick={googleCallback}
        variant="secondary"
        size="xsm"
        icon={<Icon id="google" />}
      />
      <Button
        onClick={linkedinCallback}
        variant="secondary"
        size="xsm"
        className={styles.linkedinButton}
        icon={<Icon id="linkedin" />}
      />
    </div>
  );
};

export default NetworkButtons;
