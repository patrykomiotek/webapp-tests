import { Button } from '@atoms/Button';
import { FormEventHandler, useRef, useState } from 'react';

const inputClass =
  'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6';

const errorInputClass = 'outline-red-300';

const errorMessageClass = 'text-red-500';

export const RegistrationForm = () => {
  const userName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const [success, setSuccess] = useState(false);
  const [validationModel, setValidationModel] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const validate = () => {
    let result = true;
    if (!userName.current || !email.current || !password.current || !confirmPassword.current) {
      return false;
    }

    if (!userName.current.value) {
      setValidationModel((prev) => ({ ...prev, userName: 'userName wymagany' }));
      result = false;
    }
    if (!email.current.value) {
      setValidationModel((prev) => ({ ...prev, email: 'email wymagany' }));
    }
    if (!email.current.value.includes('@')) {
      // TODO: replace to sth better ;)
      setValidationModel((prev) => ({ ...prev, email: 'email jest nieprawidłowy' }));
    }
    if (!password.current.value) {
      setValidationModel((prev) => ({ ...prev, password: 'hasło wymagane' }));
      result = false;
    } else if (confirmPassword.current.value !== password.current.value) {
      setValidationModel((prev) => ({ ...prev, password: 'takie samo ma być' }));
      result = false;
    }
    return result;
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (validate()) {
      setSuccess(true);

      if (userName.current && email.current && password.current && confirmPassword.current) {
        userName.current.value = '';
        email.current.value = '';
        password.current.value = '';
        confirmPassword.current.value = '';
      }
    }
  };

  return (
    <>
      {success && <p className="text-green-500">Registration Successful!</p>}
      <div className="flex w-sm">
        <form onSubmit={handleSubmit} className="w-full space-y-2">
          <div>
            <label htmlFor="userName">Username</label>
            <input
              ref={userName}
              name="userName"
              id="userName"
              type="text"
              className={`${inputClass}`}
            />
            {validationModel.userName && (
              <p className={errorMessageClass}>{validationModel.userName}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input ref={email} id="email" type="email" className={`${inputClass}`} />
            {validationModel.email && <p className={errorMessageClass}>{validationModel.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input ref={password} id="password" type="password" className={inputClass} />
            {validationModel.password && (
              <p className={errorMessageClass}>{validationModel.password}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              ref={confirmPassword}
              id="confirm-password"
              type="password"
              className={inputClass}
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};
