import { useState } from 'react';

export const useAuthContext = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => setIsLoggedIn((value) => !value);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggle, logIn, logOut };
};
