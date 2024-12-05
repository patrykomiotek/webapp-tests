import { z } from 'zod';
import { RegistrationFormRefs } from '@components/RegistrationFormRefs';
import { RegistrationFormState } from '@components/RegistrationFormState';
import { toast } from 'react-toastify';
import { RegistrationFormHookForm } from '@components/RegistrationFormHookForm';

// / -> App.tsx -> HomePage.tsx -> RegistrationFormState & RegistrationFormRefs

// export interface RegistrationFromData {
//   email: string;
//   password: string;
//   favLang: string;
// }

export const registrationSchema = z.object({
  email: z.string().email('Invalid e-mail'),
  password: z.string().min(3, 'Pass should be at least 3 character').max(6, 'To long!'),
  favLang: z.string(),
});

export type RegistrationFromData = z.infer<typeof registrationSchema>;

export const HomePage = () => {
  const handleSubmit = (data: RegistrationFromData): void => {
    // console.log({ data }); // POST -> API
    // registrationSchema.parse(data) // throw an error
    const { success, error } = registrationSchema.safeParse(data); // { success: true }
    if (success) {
      // API call
      toast.success('Done!');
      console.info(data);
    } else {
      // validation error
      console.log(error);
      toast.error('Validation error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl">With React Hook Form</h2>
      <RegistrationFormHookForm onSubmit={handleSubmit} />

      <h2 className="text-2xl">With State</h2>
      <RegistrationFormState onSubmit={handleSubmit} />

      <h2 className="text-2xl">With Refs</h2>
      <RegistrationFormRefs onSubmit={handleSubmit} />
    </div>
  );
};
