// import { RegistrationFormState } from '@components/RegistrationFormState';
// import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import { ProductsList } from '@features/products/components/ProductsList';
import './App.css';
import { HomePage } from '@pages/Home';
import { Toast } from '@ui';
import { CategoriesList } from '@features/products/components/CategoriesList';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
// import { Generator } from "@components/Generator";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ProductsList /> */}
      {/* <CategoriesList /> */}
      {/* <HomePage /> */}
      {/* <Toast /> */}
    </>
  );
}

export default App;
