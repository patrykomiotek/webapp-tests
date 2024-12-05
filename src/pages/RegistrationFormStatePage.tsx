import { RegistrationFromData } from '@apptypes/registration';
import { RegistrationFormState } from '@components/RegistrationFormState';
import { Header } from '@ui';

export const RegistrationFormStatePage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    console.info(data);
  };

  return (
    <div>
      <Header>With React State</Header>
      <RegistrationFormState onSubmit={handleSubmit} />
    </div>
  );
};
