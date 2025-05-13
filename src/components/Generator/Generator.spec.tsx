import { render, screen, fireEvent } from '@testing-library/react';
import { Generator } from './Generator';

describe('Generator component', () => {
  it('should change value on the screen', () => {
    const { debug } = render(<Generator />);
    debug();

    const idElement = screen.getByText(/[a-z0-9-]{36}/);
    const id = idElement.textContent;
    expect(idElement).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    const newIdElement = screen.getByText(/[a-z0-9-]{36}/);
    const newId = newIdElement.textContent;
    expect(newIdElement).toBeInTheDocument();

    debug();

    expect(id).not.toEqual(newId);

    // const uuid = screen.getByText(/[a-z0-9-]{36}/).textContent;

    // fireEvent.click(screen.getByRole('button'));

    // const uuidChanged = screen.getByText(/[a-z0-9-]{36}/).textContent;

    // expect(uuid).not.toEqual(uuidChanged);
  });
});
