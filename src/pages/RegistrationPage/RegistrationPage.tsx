import { Link } from 'react-router-dom';

import { ROUTES } from '../../routing/routes';
import OverlinedText from '../../components/OverlinedText';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import RoadImage from '../../components/RoadImage/RoadImage';

import NetworkButtons from '../../components/NetworkButtons';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <RegistrationForm />
        <div className={styles.socialWrapper}>
          <OverlinedText>or sign up with</OverlinedText>
          <NetworkButtons
            className={styles.socialBtns}
            googleCallback={() => {}}
            linkedinCallback={() => {}}
          />
          <p className={styles.text}>
            Already have an account?
            <Link to={ROUTES.LOGIN} className={styles.linkLogIn}>
              LOG IN
            </Link>
          </p>
        </div>
      </div>
      <RoadImage className={styles.road} />
    </div>
  );
};

export default RegistrationPage;
