import { useAuthContext } from './AuthContext';

export const AuthCredentials = () => {
  const context = useAuthContext();
  return (
    <div>
      <h3>Auth Credentials</h3>
      <p>Is user logged? {context.isLogged ? 'YES' : 'NO'}</p>
      <button onClick={() => context.toggle()}>Toggle</button>
    </div>
  );
};
