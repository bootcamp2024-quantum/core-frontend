import React from 'react';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import css from './AvatarInput.module.css';
import sprite from '../../images/sprite.svg';

interface AvatarInputProps {
  handleAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileButtonClick: () => void;
  avatarImagePath: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const AvatarInput: React.FC<AvatarInputProps> = ({
  handleAvatarChange,
  handleFileButtonClick,
  avatarImagePath,
  fileInputRef,
}) => {
  return (
    <div className={css.photoBlock}>
      <p className={css.photoTitle}>Photo(optional)</p>
      <div className={css.divPhotoThumb} onClick={handleFileButtonClick}>
        <input
          ref={fileInputRef}
          id="photo"
          className={css.photoInput}
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
        />
        {avatarImagePath ? (
          <img
            className={css.photoThumb}
            src={avatarImagePath}
            alt="User avatar"
          />
        ) : (
          <Icon id="user" className={css.userIcon} />
        )}
      </div>
      <Button
        type="button"
        variant="primary"
        className={css.customFileButton}
        onClick={handleFileButtonClick}
      >
        Upload
        <svg className={css.uploadIcon}>
          <use xlinkHref={`${sprite}#upload`} />
        </svg>
      </Button>
    </div>
  );
};

export default AvatarInput;
