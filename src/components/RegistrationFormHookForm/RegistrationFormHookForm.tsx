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
      <Input {...register('email')} label="E-mail" name="email" />
      {errors.email && <p>Invalid e-mail: {errors.email.message}</p>}

      <Input {...register('password')} label="Password" type="password" name="password" />
      {errors.password && <p>Invalid password: {errors.password.message}</p>}

      <Input {...register('favLang')} label="Language" name="favLang" />
      {errors.favLang && <p>Invalid favLang: : {errors.favLang.message}</p>}

      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
