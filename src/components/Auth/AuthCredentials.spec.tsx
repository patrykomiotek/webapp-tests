import { render, screen, fireEvent } from '@testing-library/react';
import { AuthCredentials } from './AuthCredentials';
import { AuthProvider } from './AuthContext';

describe('AuthCredentials component', () => {
  it('should toggle values', () => {
    render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>,
    );

    expect(screen.getByText('Is user logged? NO', { exact: false })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Is user logged? YES', { exact: false })).toBeInTheDocument();
  });
});
