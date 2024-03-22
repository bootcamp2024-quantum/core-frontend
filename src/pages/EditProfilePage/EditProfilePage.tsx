import { useSelector } from 'react-redux';

import Header from '../../components/Header/Header'
import ProfileSelector from '../../components/ProfileSelector/ProfileSelector'
import { selectUser } from '../../store/user/selectors';

import css from './EditProfilePage.module.css'

const EditProfilePage = () => {
    const handleSelect = (value: string) => {
        console.log('Selected value:', value);
    };
    const user = useSelector(selectUser);

    return (
        <section>
            <Header />
            <div className={css.profile}>
                <div className={css.generalBlock}>
                    <h2 className={css.profileTitle}>Nice to see you, {user.name || "Mike"}!</h2>
                    <ProfileSelector onSelect={handleSelect} />
                </div>
            </div>
        </section>
    )
}

export default EditProfilePage