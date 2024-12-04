import { type RegistrationFromData } from '@pages/Home';
import { Button } from '@ui';
import { Input } from '@ui';
import { type FormEventHandler, useRef } from 'react';

interface Props {
  onSubmit: (data: RegistrationFromData) => void;
}

export const RegistrationFormRefs = ({ onSubmit }: Props) => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const favLangInput = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    // console.log(emailInput.current?.value);
    // console.log(passwordInput.current?.value);
    // console.log(favLangInput.current?.value);

    onSubmit({
      email: emailInput.current?.value || '',
      password: passwordInput.current?.value || '',
      favLang: favLangInput.current?.value || '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="E-mail" ref={emailInput} name="email" />
      <Input label="Password" ref={passwordInput} type="password" name="password" />
      <Input label="Language" ref={favLangInput} name="favLang" />
      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
