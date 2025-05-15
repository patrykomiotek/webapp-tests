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
});
