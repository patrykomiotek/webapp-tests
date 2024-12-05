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
// import { Generator } from "@components/Generator";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      {/* <ProductsList /> */}
      {/* <CategoriesList /> */}
      {/* <HomePage /> */}
      {/* <Toast /> */}
    </>
  );
}

export default App;
