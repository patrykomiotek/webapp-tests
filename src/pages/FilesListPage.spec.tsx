vi.mock('../services/fetchFiles.ts', () => ({
  fetchFiles: vi.fn(),
}));

import { render, screen } from '@testing-library/react';
import { FilesListPage } from './FilesListPage';
import { fetchFiles } from '@services/fetchFiles';

describe('FilesListPage', () => {
  it('should render loading indicator', () => {
    vi.mocked(fetchFiles).mockResolvedValueOnce({
      records: [{ id: '123', fields: { name: 'aaa', description: 'bbb', type: 'text/plain' } }],
    });
    render(<FilesListPage />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render data', async () => {
    vi.mocked(fetchFiles).mockResolvedValueOnce({
      records: [{ id: '123', fields: { name: 'aaa', description: 'bbb', type: 'text/plain' } }],
    });
    render(<FilesListPage />);

    expect(await screen.findByText('bbb', { exact: false })).toBeInTheDocument();
  });

  it('should display error indicator', async () => {
    vi.mocked(fetchFiles).mockRejectedValueOnce({});
    render(<FilesListPage />);

    expect(await screen.findByText('Files error', { exact: false })).toBeInTheDocument();
  });
});
