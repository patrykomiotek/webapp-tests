import { render, screen } from '@testing-library/react';

import { FilesList } from './FilesList';
import { FileDto } from '@apptypes/dtos/Files.dto';

const data: FileDto[] = [
  {
    id: '1234',
    fields: {
      name: 'aaaa',
      description: 'bbb',
      type: 'text',
    },
  },
];

describe('FileList spec', () => {
  it('should display rendered data', () => {
    // debug, container, rerender, unmount
    const { debug } = render(<FilesList files={data} />);

    // debug();
    // const elem = screen.getByText('aaaa');
    const elem = screen.getByText('aaa', { exact: false });
    // const elem = screen.getByText(/aaaa/i);

    expect(elem).toBeInTheDocument();
  });
});
