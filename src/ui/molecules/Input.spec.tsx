import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Input } from './Input';

describe('input component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Input label="My input" />);
    // console.log({ container });
    expect(container).toMatchSnapshot();
  });

  it('should pass accessibility check', async () => {
    const { container } = render(<Input label="My input" />);

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
