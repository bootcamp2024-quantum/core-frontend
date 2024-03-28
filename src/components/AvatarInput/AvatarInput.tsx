import React from 'react';

import Button from '../../components/Button';
import Icon from '../../components/Icon';

import styles from './AvatarInput.module.css';

interface AvatarInputProps {
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileButtonClick: () => void;
  avatarImagePath: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const AvatarInput = ({
  handleAvatarChange,
  handleFileButtonClick,
  avatarImagePath,
  fileInputRef,
}: AvatarInputProps) => {
  return (
    <div className={styles.photoBlock}>
      <p className={styles.photoTitle}>Photo(optional)</p>
      <div className={styles.divPhotoThumb} onClick={handleFileButtonClick}>
        <input
          ref={fileInputRef}
          id="photo"
          className="sr-only"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        {avatarImagePath ? (
          <img
            className={styles.photoThumb}
            src={avatarImagePath}
            alt="User avatar"
          />
        ) : (
          <Icon id="user" boxStyles={styles.userIcon} size={100} />
        )}
      </div>
      <Button
        type="button"
        variant="secondary"
        size="md"
        onClick={handleFileButtonClick}
        icon={<Icon id="upload" className={styles.uploadIcon} />}
      >
        Upload
      </Button>
    </div>
  );
};

export default AvatarInput;
