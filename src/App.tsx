import { RegistrationFormState } from '@components/RegistrationFormState';
import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import './App.css';
// import { Generator } from "@components/Generator";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <Generator /> */}
      <h2 className="text-2xl">With State</h2>
      <RegistrationFormState />
      <h2 className="text-2xl">With Refs</h2>
      <RegistrationFormRefs />
    </>
  );
}

export default App;
