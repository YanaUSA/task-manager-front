import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const StartPage = () => {
  return (
    <>
      <h2>RegisterForm</h2>
      <RegisterForm />
      <h2>LoginForm</h2>
      <LoginForm />
    </>
  );
};

export default StartPage;
