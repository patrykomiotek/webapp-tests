import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import { RegistrationFormState } from '@components/RegistrationFormState';

// / -> App.tsx -> HomePage.tsx -> RegistrationFormState & RegistrationFormRefs

export interface RegistrationFromData {
  email: string;
  password: string;
  favLang: string;
}

export const HomePage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    console.log({ data }); // POST -> API
  };

  return (
    <div>
      <h2 className="text-2xl">With State</h2>
      <RegistrationFormState onSubmit={handleSubmit} />

      <h2 className="text-2xl">With Refs</h2>
      <RegistrationFormRefs onSubmit={handleSubmit} />
    </div>
  );
};
