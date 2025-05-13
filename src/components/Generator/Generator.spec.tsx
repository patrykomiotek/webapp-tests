import { render, screen, fireEvent } from '@testing-library/react';
import { Generator } from './Generator';

describe('Generator component', () => {
  it('should change value on the screen', () => {
    const { debug } = render(<Generator />);
    debug();

    const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;

    fireEvent.click(screen.getByRole('button'));

    const uuidChanged = screen.getByText(/[a-z0-9-]{36}/).textContent;

    expect(uuid).not.toEqual(uuidChanged);
  });
});
