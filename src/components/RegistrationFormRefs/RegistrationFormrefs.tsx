import { Button } from '@ui';
import { Input } from '@ui';
import { type FormEventHandler, useRef } from 'react';

export const RegistrationFormRefs = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const favLangInput = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(emailInput.current?.value);
    console.log(passwordInput.current?.value);
    console.log(favLangInput.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="E-mail" ref={emailInput} type="email" name="email" />
      <Input label="Password" ref={passwordInput} type="password" name="password" />
      <Input label="Password" ref={favLangInput} name="favLang" />
      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
