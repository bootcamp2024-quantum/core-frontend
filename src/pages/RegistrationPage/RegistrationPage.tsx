import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import OverlinedText from '../../components/OverlinedText';
import RoadImage from '../../components/RoadImage/RoadImage';
import { ROUTES } from '../../components/routes';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.register}>
      <div className={css.registerWrapper}>
        <RegistrationForm />
        <div className={css.socialWrapper}>
          <OverlinedText>or sign up with</OverlinedText>
          <div className={css.socialBtns}>
            <Button
              variant="secondary"
              size="xsm"
              icon={<Icon id="google" />}
            />
            <Button
              variant="secondary"
              size="xsm"
              className={css.linkedinButton}
              icon={<Icon id="linkedin" />}
            />
          </div>
          <p className={css.text}>
            Already have an account?
            <Link to={ROUTES.LOGIN} className={css.linkLogIn}>
              LOG IN
            </Link>
          </p>
        </div>
      </div>
      <RoadImage className={css.road} />
    </div>
  );
};

export default RegistrationPage;
