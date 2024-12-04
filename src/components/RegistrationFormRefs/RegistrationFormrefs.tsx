import { Button } from '@ui';
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
      <div className="my-4">
        <input ref={emailInput} type="email" name="email" className="bg-black text-white" />
      </div>
      <div className="my-4">
        <input
          ref={passwordInput}
          type="password"
          name="password"
          className="bg-black text-white"
        />
      </div>
      <div className="my-4">
        <input ref={favLangInput} name="favLang" className="bg-black text-white" />
      </div>
      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
