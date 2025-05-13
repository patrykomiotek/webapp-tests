import { render, screen } from '@testing-library/react';

import FilesList from './FilesList';

describe('FileList spec', () => {
  it('should display loading indicator', () => {
    // debug, container, rerender, unmount
    const { debug } = render(<FilesList />);

    // debug();
    const elem = screen.getByText('Loading...');

    expect(elem).toBeInTheDocument();
  });

  it('should display resolved values', () => {
    const { debug } = render(<FilesList />);
  });
});
