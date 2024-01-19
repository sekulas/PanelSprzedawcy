import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../features/auth/AuthContext';
import LanguageContext from '../features/languages/LanguageContext';

const LoginPage = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const { dictionary } = useContext(LanguageContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    login();
  };

  return (
    <>
      {
        isAuthenticated ? (
          <>
          <Navigate to="/" />
          </>
        )
          : (
            <div id="login-page">
              <h1>{dictionary.loginPage.title}</h1>
                <p className='small-text'>{dictionary.loginPage.username}</p>
                  <input
                    type="text"
                    placeholder={dictionary.loginPage.usernameInput}
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <br/>
                  <p className='small-text'>{dictionary.loginPage.password}</p>
                  <input
                    type="password"
                    placeholder={dictionary.loginPage.passwordInput}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <br/>
                  <div id="login-buttons">
                    <button onClick={handleLogin}>{dictionary.loginPage.login}</button>
                  </div>
            </div>
          )
      }
    </>
  );
}

export default LoginPage;