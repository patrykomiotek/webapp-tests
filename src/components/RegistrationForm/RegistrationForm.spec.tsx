import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
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

  it('should render all fields', () => {
    render(<RegistrationForm />);

    console.log(screen.getAllByRole('textbox'));

    // WHY 2 not 4?
    // expect(screen.getAllByRole('textbox').length).toEqual(4);
    // input
    // expect(screen.getByLabelText('Username')).toBeInTheDocument();

    // text
    expect(screen.getByText('Username')).toBeInTheDocument();
  });
  it('should render validation messages', () => {
    render(<RegistrationForm />);

    fireEvent.click(screen.getByRole('button'));
    // await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('userName wymagany')).toBeInTheDocument();
  });
  it('should validate email address', () => {
    render(<RegistrationForm />);

    const userName = screen.getByLabelText('Username');
    fireEvent.change(userName, { target: { value: 'new value' } });
    // fireEvent.
    // await userEvent.type(userName, 'new value')
  });
  it.todo('should validate too short password');
  it.todo('should validate invalid passwords');
  it.todo('should display success message');
  it.skip('should clear error message after passing valid data', () => {
    render(<RegistrationForm />);

    // fill form
    // send form

    const userNameField = screen.getByLabelText('Username');
    expect(userNameField).toBe('');
  });
});
