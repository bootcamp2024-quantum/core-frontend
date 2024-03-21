import Button from '../../components/Button';
import Icon from '../../components/Icon';
import LoginForm from '../../components/LoginForm/LoginForm';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import OverlinedText from '../../components/OverlinedText';
import PageTitle from '../../components/PageTitle';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <MaxWidthWrapper className={styles.wraper}>
      <div className={styles.container}>
        <PageTitle>Log in</PageTitle>
        <LoginForm />
        <Button type="button" variant="link">
          Forgot password
        </Button>
        <OverlinedText>or log in with</OverlinedText>
        <div className={styles.buttonsGroup}>
          <Button variant="secondary" size="xsm" icon={<Icon id="google" />} />
          <Button
            variant="secondary"
            size="xsm"
            className={styles.linkedinButton}
            icon={<Icon id="linkedin" />}
          />
        </div>

        <p className={styles.text}>
          Don't have an account? <Button variant="link">SIGN UP</Button>
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default LoginPage;
