import { useAuth } from '@hooks/useAuth';
import { createContext, useContext } from 'react';

// isLogged: boolean
// toggle: () => void
// logIn: () => void
// logOut: () => void

interface AuthContextInterface {
  isLoggedIn: boolean;
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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const { isLoggedIn, logIn, logOut, toggle } = useAuth(); // external hook
  return (
    <AuthContext.Provider value={useAuth()}>
      {/* <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, toggle }}> */}
      {children}
    </AuthContext.Provider>
  );
};
