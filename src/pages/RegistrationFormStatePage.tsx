import { RegistrationFromData } from '@apptypes/registration';
import { RegistrationFormState } from '@components/RegistrationFormState';

export const RegistrationFormStatePage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    console.info(data);
  };

  return (
    <div>
      <h2 className="text-2xl">With React Hook Form</h2>
      <RegistrationFormState onSubmit={handleSubmit} />
    </div>
  );
};
