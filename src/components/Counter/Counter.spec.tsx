import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';
describe('Counter', () => {
  it('should have an initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByText('0', { exact: false })).toBeInTheDocument();
  });
  it('should increment value', () => {
    render(<Counter />);
    expect(screen.getByText('0', { exact: false })).toBeInTheDocument();
    // fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByRole('button', { name: /increment/i }));
    expect(screen.getByText('1', { exact: false })).toBeInTheDocument();
  });
  it('should decrement value', () => {
    render(<Counter />);
    expect(screen.getByText('0', { exact: false })).toBeInTheDocument();
    // fireEvent.click(screen.getByText('Decrement'));
    fireEvent.click(screen.getByRole('button', { name: 'Decrement' }));
    expect(screen.getByText('-1', { exact: false })).toBeInTheDocument();
  });
});
