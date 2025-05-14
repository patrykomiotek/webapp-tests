import { useCallback, useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);
  const reset = useCallback(() => setCounter(0), []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>{counter}</p>
    </div>
  );
};
