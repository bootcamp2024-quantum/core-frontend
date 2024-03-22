import Button from '../../components/Button';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/Container';
import NetworkButtons from '../../components/NetworkButtons';
import OverlinedText from '../../components/OverlinedText';
import PageTitle from '../../components/PageTitle';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.formContainer}>
          <PageTitle>Log in</PageTitle>
          <LoginForm />
          <Button type="button" variant="link">
            Forgot password
          </Button>
          <OverlinedText>or log in with</OverlinedText>
          <NetworkButtons
            googleCallback={() => {}}
            linkedinCallback={() => {}}
          />

          <p className={styles.text}>
            Don't have an account? <Button variant="link">SIGN UP</Button>
          </p>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
