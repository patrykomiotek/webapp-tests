import { RegistrationFromData } from '@apptypes/registration';
import { RegistrationFormRefs } from '@components/RegistrationFormRefs';

export const RegistrationFormRefsPage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    console.info(data);
  };

  return (
    <div>
      <h2 className="text-2xl">With React Hook Form</h2>
      <RegistrationFormRefs onSubmit={handleSubmit} />
    </div>
  );
};
