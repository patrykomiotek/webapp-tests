import { render, screen } from '@testing-library/react';

import { TodoList } from '@components/Todos/Todos';
import { fetchTodos } from '@services/todosService';

// vi.mock('../../services/todosService.ts', () => {
//   return {
//     fetchTodos: vi.fn(),
//   };
// });

vi.mock('../../services/todosService.ts');

describe('Todo component', () => {
  it('should display loading indicator', () => {
    vi.mocked(fetchTodos).mockImplementationOnce(() => new Promise(() => {}));
    // vi.mocked(fetchTodos).mockResolvedValue({});

    render(<TodoList />);

    screen.getByText('Loading...');
  });

  it('should display loaded values', async () => {
    // vi.mocked(fetchTodos).mockImplementationOnce(
    //   () =>
    //     new Promise((resolve) =>
    //       resolve([
    //         { id: 1, name: 'a', completed: false },
    //         { id: 2, name: 'b', completed: true },
    //         { id: 3, name: 'c', completed: false },
    //       ]),
    //     ),
    // );
    vi.mocked(fetchTodos).mockResolvedValue([
      { id: 1, name: 'a', completed: false },
      { id: 2, name: 'b', completed: true },
      { id: 3, name: 'c', completed: false },
    ]);

    const { debug } = render(<TodoList />);
    // debug(); // this debug wont display resolved values

    await screen.findByText('a');
    const completedElement = await screen.findByText('b');
    expect(completedElement).toHaveStyle('text-decoration: line-through');

    await screen.findByText('c');
  });

  it('should display indicator when service returns an empty array', async () => {
    vi.mocked(fetchTodos).mockResolvedValue([]);

    render(<TodoList />);

    expect(await screen.findByText('No todos found')).toBeInTheDocument();
  });

  it('should display error when service fails', async () => {
    vi.mocked(fetchTodos).mockRejectedValue(null);

    render(<TodoList />);

    expect(await screen.findByText('Nie dziala')).toBeInTheDocument();
  });
});
