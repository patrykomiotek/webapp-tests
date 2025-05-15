import { Button } from '@atoms/Button';
import { FormEventHandler } from 'react';

const inputClass =
  'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6';

export const RegistrationForm = () => {
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value, event.target[1].value, event.target[2].value);
  };

  return (
    <div className="flex w-sm">
      <form onSubmit={handleSubmit} className="w-full space-y-2">
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className={inputClass} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input id="confirm-password" type="password" className={inputClass} />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
