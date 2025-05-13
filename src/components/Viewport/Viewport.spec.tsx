vi.mock('../../hooks/useViewport.ts', () => {
  return {
    ...vi.importActual('../../hooks/useViewport.ts'),
    useViewport: vi.fn(),
    // foo: vi.fn().mockImplementation()
  };
});

import { render, screen } from '@testing-library/react';

import { Viewport } from './Viewport';
import { useViewport } from '../../hooks/useViewport';

// useViewport

describe('Viewport component', () => {
  it('should display mocked initial values', () => {
    vi.mocked(useViewport).mockImplementationOnce(() => ({ x: 100, y: 200 }));
    render(<Viewport />);

    expect(screen.getByText('x: 100 y: 200')).toBeInTheDocument();
  });

  it('should display new mocked initial values', () => {
    vi.mocked(useViewport).mockImplementationOnce(() => ({ x: 2000, y: 200 }));
    render(<Viewport />);

    expect(screen.getByText('x: 2000 y: 200')).toBeInTheDocument();
  });
});
