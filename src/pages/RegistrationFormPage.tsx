import { Helmet } from 'react-helmet-async';

import { Route } from '../routes';
import { RegistrationForm } from '@components/RegistrationForm';

export const RegistrationFormPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.REGISTRATION_FORM.title}</title>
      </Helmet>
      <div>
        <h1 className="text-3xl my-2">Registration Form Page</h1>
        <RegistrationForm />
      </div>
    </>
  );
};
