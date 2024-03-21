import { ReactNode } from 'react';
import styles from './OverlinedText.module.css';

const OverlinedText = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.wordСontainer}>
      <span className={styles.line} />
      <span className={styles.word}>{children}</span>
      <span className={styles.line} />
    </div>
  );
};

export default OverlinedText;
