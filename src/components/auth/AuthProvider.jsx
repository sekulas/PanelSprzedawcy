import { useState } from 'react';
import AuthContext from '../../context/AuthContext';

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setIsAuthenticated(true);
    setUsername('Jacek');
  }
  const logout = () => {
    setIsAuthenticated(false);
    setUsername("");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;