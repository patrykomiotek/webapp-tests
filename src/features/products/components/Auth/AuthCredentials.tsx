import { Button } from '@atoms/Button';
import { useAuthContext } from './AuthContext';

export const AuthCredentials = () => {
  const context = useAuthContext();
  return (
    <div>
      <h3 className="text-xl my-2">Auth Credentials</h3>
      <p className="my-2">Is user logged? {context.isLoggedIn ? 'YES' : 'NO'}</p>
      <Button onClick={() => context.toggle()}>Toggle</Button>
    </div>
  );
};
