import { useNavigate } from 'react-router';
import { ROUTES } from '../../routing/routes';
import Button from '../../components/Button';
import Container from '../../components/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import NetworkButtons from '../../components/NetworkButtons';
import OverlinedText from '../../components/OverlinedText';
import PageTitle from '../../components/PageTitle';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.formContainer}>
        <PageTitle>Log in</PageTitle>
        <LoginForm />
        <Button type="button" variant="link">
          Forgot password
        </Button>
        <OverlinedText>or log in with</OverlinedText>
        <NetworkButtons googleCallback={() => {}} linkedinCallback={() => {}} />

        <p className={styles.text}>
          Don't have an account?{' '}
          <Button variant="link" onClick={() => navigate(ROUTES.REGISTER)}>
            SIGN UP
          </Button>
        </p>
      </div>
    </Container>
  );
};

export default LoginPage;
