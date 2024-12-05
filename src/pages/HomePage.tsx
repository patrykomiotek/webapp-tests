import { useAuthContext } from '@components/Auth/AuthContext';
import { Text } from '@ui';

export const HomePage = () => {
  const context = useAuthContext();

  return (
    <div>
      <h2 className="text-2xl">Hello from home</h2>
      <Text>
        Is logged in:
        {context.isLoggedIn ? 'YES' : 'NO'}
      </Text>
    </div>
  );
};
