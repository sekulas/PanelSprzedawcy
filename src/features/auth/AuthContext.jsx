import { createContext } from 'react';

const AuthContext = createContext({ isAuthenticated: false, clientId: "", name: "", surname: "", login: () => { }, logout: () => { } });

export default AuthContext;