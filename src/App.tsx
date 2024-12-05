// import { RegistrationFormState } from '@components/RegistrationFormState';
// import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import { ProductsList } from '@features/products/components/ProductsList';
import './App.css';
import { HomePage } from '@pages/Home';
import { Toast } from '@ui';
import { CategoriesList } from '@features/products/components/CategoriesList';
// import { Generator } from "@components/Generator";

function App() {
  return (
    <>
      <ProductsList />
      <CategoriesList />
      {/* <HomePage /> */}
      {/* <Toast /> */}
    </>
  );
}

export default App;
