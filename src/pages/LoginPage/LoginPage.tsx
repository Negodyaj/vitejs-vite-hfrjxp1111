import { User } from '../../models/user';
import './LoginPage.scss';

type LoginPageProps = {
  logInHandler: (user: User) => void;
};

export const LoginPage = (props: LoginPageProps) => {
  const handleLoginButtonClick = () => {
    // later user info will be received from the backend
    const user: User = {
      login: 'admin',
      name: 'Antoshka',
    };

    props.logInHandler(user);
  };

  return (
    <div className="login-page">
      <div className="container">
        <form>
          <label>
            Login:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="button" onClick={handleLoginButtonClick}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
