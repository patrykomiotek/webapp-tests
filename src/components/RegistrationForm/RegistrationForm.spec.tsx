import { render, screen, fireEvent } from '@testing-library/react';
import { RegistrationForm } from './RegistrationForm';

describe('RegistrationForm component', () => {
  it('should fill email address', () => {
    const { debug } = render(<RegistrationForm />);

    debug();
    let emailField = screen.getByLabelText('E-mail');

    fireEvent.change(emailField, { target: { value: 'test@wp.pl' } });
    debug();

    emailField = screen.getByLabelText('E-mail');
    screen.debug(emailField);
  });

  it.todo('should render all fields');
  it.todo('should render validation messages');
  it.todo('should validate email address');
  it.todo('should validate too short password');
  it.todo('should validate invalid passwords');
  it.todo('should display success message');
  it.todo('should clear error message after passing valid data');
});
