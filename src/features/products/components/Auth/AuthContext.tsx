import { createContext, useContext } from 'react';

// isLogged: boolean
// toggle: () => void
// logIn: () => void
// logOut: () => void

interface AuthContextInterface {
  isLogged: boolean;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Component should be placed inside AuthProvider');
  }

  return context;
};
