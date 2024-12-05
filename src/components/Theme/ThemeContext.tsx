import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export const ThemeContext = createContext<ThemeContext>({ theme: 'light', setTheme: () => null });

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
