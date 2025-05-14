import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from './routes';
import { store } from './store';

import './App.css';
import { AuthProvider } from '@features/products/components/Auth/AuthContext';

// const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      {/* </QueryClientProvider> */}
    </Provider>
  );
}

export default App;
