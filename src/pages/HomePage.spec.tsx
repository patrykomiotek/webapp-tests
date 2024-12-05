import { render } from '@testing-library/react';
import { HomePage } from './HomePage';
import { AuthProvider } from '@components/Auth/AuthContext';

describe('HomePage component', () => {
  it('should display HomePage component ;)', () => {
    const { debug } = render(
      <AuthProvider>
        <HomePage />
      </AuthProvider>,
    );
    debug();
  });
});
