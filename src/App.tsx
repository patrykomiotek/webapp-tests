// import { RegistrationFormState } from '@components/RegistrationFormState';
// import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import { ProductsList } from '@features/products/components/ProductsList';
import './App.css';
import { HomePage } from '@pages/Home';
import { Toast } from '@ui';
import { CategoriesList } from '@features/products/components/CategoriesList';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import { AuthProvider } from '@components/Auth/AuthContext';
import { ThemeProvider } from '@components/Theme/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store } from './store';
// import { Generator } from "@components/Generator";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </Provider>
      {/* <ProductsList /> */}
      {/* <CategoriesList /> */}
      {/* <HomePage /> */}
      {/* <Toast /> */}
    </>
  );
}

export default App;
