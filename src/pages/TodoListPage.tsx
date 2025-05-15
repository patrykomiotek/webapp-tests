import { Helmet } from 'react-helmet-async';

import { TodoList } from '@components/Todos/Todos';
import { Route } from '../routes';

export const TodoListPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.TODO_LIST.title}</title>
      </Helmet>
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </>
  );
};
