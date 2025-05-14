import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Button } from './Button';

describe('Button component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Button>Click me</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should pass accessibility check', async () => {
    const { container } = render(<Button>Click me</Button>);

    const result = await axe(container);

    expect(result).toHaveNoViolations();
  });
});
