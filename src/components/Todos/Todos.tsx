import { useEffect, useState } from 'react';
import { fetchTodos, Todo } from '@services/todosService';

enum Status {
  'IsLoaded',
  'IsLoading',
  'IsError',
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [status, setStatus] = useState(Status.IsLoading);

  useEffect(() => {
    fetchTodos(false)
      .then((res) => {
        setTodos(res);
        setStatus(Status.IsLoaded);
      })
      .catch(() => {
        setStatus(Status.IsError);
      });
  }, []);

  switch (status) {
    case Status.IsLoaded:
      return (
        <div>
          {todos.length
            ? todos.map((elem) => (
                <div>
                  <p style={{ textDecoration: elem.completed ? 'line-through' : 'none' }}>
                    {elem.name}
                  </p>
                </div>
              ))
            : 'No todos found'}
        </div>
      );

    case Status.IsLoading:
      return <div>Loading...</div>;

    case Status.IsError:
      return <div>Nie dziala</div>;
  }
};
