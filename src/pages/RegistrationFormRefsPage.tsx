import { RegistrationFromData } from '@apptypes/registration';
import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import { Header } from '@ui';

export const RegistrationFormRefsPage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    console.info(data);
  };

  return (
    <div>
      <Header>With React Refs</Header>
      <RegistrationFormRefs onSubmit={handleSubmit} />
    </div>
  );
};
