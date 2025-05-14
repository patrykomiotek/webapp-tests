export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

export const fetchTodos = async (isError: boolean): Promise<Todo[]> => {
  return new Promise((resolveInner, reject) => {
    setTimeout(() => {
      return isError
        ? reject('Nie dla psa, dla pana to')
        : resolveInner([
            { id: 1, name: 'a', completed: false },
            { id: 2, name: 'b', completed: true },
            { id: 3, name: 'c', completed: false },
          ]);
    }, 1000);
  });
};
