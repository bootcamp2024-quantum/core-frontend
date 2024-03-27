import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import OverlinedText from '../../components/OverlinedText';
import RoadImage from '../../components/RoadImage/RoadImage';
import { ROUTES } from '../../Routing/routes';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <RegistrationForm />
        <div className={styles.socialWrapper}>
          <OverlinedText>or sign up with</OverlinedText>
          <div className={styles.socialBtns}>
            <Button
              variant="secondary"
              size="xsm"
              icon={<Icon id="google" />}
            />
            <Button
              variant="secondary"
              size="xsm"
              className={styles.linkedinButton}
              icon={<Icon id="linkedin" />}
            />
          </div>
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
