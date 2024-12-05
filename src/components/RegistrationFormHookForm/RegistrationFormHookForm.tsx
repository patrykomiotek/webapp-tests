import { zodResolver } from '@hookform/resolvers/zod';
import { type RegistrationFromData, registrationSchema } from '@pages/Home';
import { Button, Input } from '@ui';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  onSubmit: (data: RegistrationFromData) => void;
}

export const RegistrationFormHookForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFromData>({
    resolver: zodResolver(registrationSchema),
  });
  // createRef

  const handleRegistrationForm: SubmitHandler<RegistrationFromData> = (data) => {
    onSubmit({
      email: data.email,
      password: data.password,
      favLang: data.favLang,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleRegistrationForm)}>
      <Input {...register('email')} label="E-mail" name="email" error={errors.email} />
      <Input
        {...register('password')}
        label="Password"
        type="password"
        name="password"
        error={errors.password}
      />
      <Input {...register('favLang')} label="Language" name="favLang" error={errors.favLang} />

      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
