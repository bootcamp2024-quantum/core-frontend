import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/selectors';
import ProfileSelector from '../../components/ProfileSelector/ProfileSelector';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';

import css from './EditProfilePage.module.css';

const EditProfilePage = () => {
  const user = useSelector(selectUser);

  const handleSelect = (value: string) => {
    console.log('Selected value:', value);
  };

  const greeting = user.name
    ? `Nice to see you, ${user.name}!`
    : 'Nice to see you, User!';

  return (
    <section>
      <div className={css.profile}>
        <div className={css.generalBlock}>
          <h2 className={css.profileTitle}>{greeting}</h2>
          <ProfileSelector onSelect={handleSelect} />
        </div>
        <EditProfileForm />
      </div>
    </section>
  );
};

export default EditProfilePage;
